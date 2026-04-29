document.addEventListener('DOMContentLoaded', () => {
  const videoUpload = document.getElementById('video-upload');
  const fileNameDisplay = document.getElementById('file-name');
  const fpsInput = document.getElementById('fps-input');
  const extractBtn = document.getElementById('extract-btn');
  const cutVideoBtn = document.getElementById('cut-video-btn');
  const gallery = document.getElementById('gallery');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  
  const progressSection = document.getElementById('progress-section');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const progressCount = document.getElementById('progress-count');
  const recordingSection = document.getElementById('recording-section');
  const downloadAllBtn = document.getElementById('download-all-btn');

  const previewSection = document.getElementById('preview-section');
  const videoPreview = document.getElementById('video-preview');
  const startTimeInput = document.getElementById('start-time');
  const endTimeInput = document.getElementById('end-time');
  const setStartBtn = document.getElementById('set-start-btn');
  const setEndBtn = document.getElementById('set-end-btn');
  const speedInput = document.getElementById('speed-input');

  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const autoPlayBtn = document.getElementById('auto-play-btn');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const filterSelect = document.getElementById('filter-select');
  const vignetteOverlay = document.getElementById('vignette-overlay');
  const modalDownloadBtn = document.getElementById('modal-download-btn');
  const zoomInBtn = document.getElementById('zoom-in-btn');
  const zoomOutBtn = document.getElementById('zoom-out-btn');
  const zoomResetBtn = document.getElementById('zoom-reset-btn');
  const zoomLevelDisplay = document.getElementById('zoom-level');
  const modalBody = document.getElementById('modal-body');
  const prevImageBtn = document.getElementById('prev-image-btn');
  const nextImageBtn = document.getElementById('next-image-btn');

  const recordingIndicator = document.getElementById('recording-indicator');
  const saveClipContainer = document.getElementById('save-clip-container');
  const saveClipBtn = document.getElementById('save-clip-btn');


  let videoElement = document.createElement('video');
  videoElement.muted = true;
  videoElement.playsInline = true;

  let currentVideoFile = null;
  let extractedFrames = []; // Store {time, dataUrl}
  let isExtracting = false;

  // Format time nicely (e.g., 01:23.4)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 10);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms}`;
  };

  videoUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      currentVideoFile = file;
      fileNameDisplay.textContent = file.name;
      extractBtn.disabled = false;
      cutVideoBtn.disabled = false;
      
      const fileUrl = URL.createObjectURL(file);
      videoElement.src = fileUrl;
      videoPreview.src = fileUrl;
      previewSection.classList.remove('hidden');
      
      // Load metadata to get video dimensions
      videoElement.onloadedmetadata = () => {
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        endTimeInput.value = videoElement.duration.toFixed(1);
        startTimeInput.value = 0;
      };
    } else {
      currentVideoFile = null;
      fileNameDisplay.textContent = 'No file selected';
      extractBtn.disabled = true;
      cutVideoBtn.disabled = true;
      previewSection.classList.add('hidden');
      videoPreview.src = '';
    }
  });

  setStartBtn.addEventListener('click', () => {
      if (videoPreview.src) {
          startTimeInput.value = videoPreview.currentTime.toFixed(1);
      }
  });

  setEndBtn.addEventListener('click', () => {
      if (videoPreview.src) {
          endTimeInput.value = videoPreview.currentTime.toFixed(1);
      }
  });

  cutVideoBtn.addEventListener('click', () => {
      if (!currentVideoFile || isExtracting) return;

      let startTime = parseFloat(startTimeInput.value) || 0;
      let endTime = parseFloat(endTimeInput.value) || videoElement.duration;

      if (startTime < 0) startTime = 0;
      if (endTime > videoElement.duration) endTime = videoElement.duration;
      if (startTime >= endTime) {
          alert("Start time must be before end time");
          return;
      }

      isExtracting = true;
      extractBtn.disabled = true;
      cutVideoBtn.disabled = true;
      fpsInput.disabled = true;
      videoUpload.disabled = true;
      
      recordingSection.classList.remove('hidden');
      recordingIndicator.classList.remove('hidden');
      saveClipContainer.classList.add('hidden');
      
      const stream = videoElement.captureStream ? videoElement.captureStream() : (videoElement.mozCaptureStream ? videoElement.mozCaptureStream() : null);
      
      if (!stream) {
          alert("Your browser does not support capturing streams from video.");
          resetState();
          recordingSection.classList.add('hidden');
          return;
      }

      let mediaRecorder;
      try {
          mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      } catch (e) {
          try {
              mediaRecorder = new MediaRecorder(stream);
          } catch (e2) {
              alert("MediaRecorder is not supported in this browser.");
              resetState();
              recordingSection.classList.add('hidden');
              return;
          }
      }

      const recordedChunks = [];
      mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) recordedChunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
          const blob = new Blob(recordedChunks, { type: 'video/webm' });
          const url = URL.createObjectURL(blob);
          
          recordingIndicator.classList.add('hidden');
          saveClipContainer.classList.remove('hidden');
          
          saveClipBtn.onclick = () => {
              const a = document.createElement('a');
              a.href = url;
              a.download = `clip_${currentVideoFile.name}.webm`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              
              resetState();
              recordingSection.classList.add('hidden');
              videoElement.playbackRate = 1.0;
          };
      };

      videoElement.playbackRate = parseFloat(speedInput.value) || 1.0;
      videoElement.currentTime = startTime;
      videoElement.play().then(() => {
          mediaRecorder.start();
          const checkTime = () => {
              if (videoElement.currentTime >= endTime) {
                  videoElement.pause();
                  mediaRecorder.stop();
              } else if (isExtracting) {
                  requestAnimationFrame(checkTime);
              }
          };
          requestAnimationFrame(checkTime);
      }).catch(err => {
          console.error("Playback failed:", err);
          alert("Could not start recording. Playback failed.");
          resetState();
          recordingSection.classList.add('hidden');
      });
  });

  extractBtn.addEventListener('click', async () => {
    if (!currentVideoFile || isExtracting) return;
    
    isExtracting = true;
    extractBtn.disabled = true;
    fpsInput.disabled = true;
    videoUpload.disabled = true;
    
    const fps = parseFloat(fpsInput.value);
    if (isNaN(fps) || fps <= 0) {
      alert("Please enter a valid FPS greater than 0");
      resetState();
      return;
    }

    gallery.innerHTML = ''; // Clear previous gallery
    extractedFrames = [];
    downloadAllBtn.classList.add('hidden');
    
    progressSection.classList.remove('hidden');
    progressText.textContent = 'Calculating duration...';
    progressBar.style.width = '0%';
    progressCount.textContent = '0 / 0';

    // Ensure metadata is fully loaded to get duration
    if (isNaN(videoElement.duration)) {
        await new Promise(resolve => {
            videoElement.addEventListener('loadedmetadata', resolve, { once: true });
        });
    }

    const duration = videoElement.duration;
    let startTime = parseFloat(startTimeInput.value) || 0;
    let endTime = parseFloat(endTimeInput.value) || duration;

    if (startTime < 0) startTime = 0;
    if (endTime > duration) endTime = duration;
    if (startTime >= endTime) {
        alert("Start time must be before end time");
        resetState();
        return;
    }

    const interval = 1 / fps;
    const totalFrames = Math.floor((endTime - startTime) / interval) + 1;
    
    progressText.textContent = 'Extracting frames...';
    progressCount.textContent = `0 / ${totalFrames}`;

    const maxFramesLimit = 500;
    if (totalFrames > maxFramesLimit) {
        const confirmMsg = `This will extract ${totalFrames} frames. This might slow down or crash your browser. Do you want to continue?`;
        if (!confirm(confirmMsg)) {
            resetState();
            return;
        }
    }

    try {
        for (let i = 0; i < totalFrames; i++) {
            const time = startTime + i * interval;
            if (time > endTime && (time - endTime) > 0.001) break;
            
            await extractFrameAtTime(time);
            
            // Update Progress
            const currentProgress = ((i + 1) / totalFrames) * 100;
            progressBar.style.width = `${currentProgress}%`;
            progressCount.textContent = `${i + 1} / ${totalFrames}`;
        }
        
        progressText.textContent = 'Extraction Complete!';
        if (extractedFrames.length > 0) {
            downloadAllBtn.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error extracting frames:', error);
        alert('An error occurred while extracting frames.');
    } finally {
        resetState();
        setTimeout(() => {
            progressSection.classList.add('hidden');
        }, 3000);
    }
  });

  function extractFrameAtTime(time) {
      return new Promise((resolve, reject) => {
          const seekHandler = () => {
              try {
                  ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                  const dataUrl = canvas.toDataURL('image/jpeg', 0.85); // 85% quality JPEG
                  
                  const frameData = { time, dataUrl };
                  extractedFrames.push(frameData);
                  renderFrameCard(frameData, extractedFrames.length - 1);
                  
                  videoElement.removeEventListener('seeked', seekHandler);
                  videoElement.removeEventListener('error', errorHandler);
                  resolve();
              } catch (e) {
                  reject(e);
              }
          };
          
          const errorHandler = (e) => {
              videoElement.removeEventListener('seeked', seekHandler);
              videoElement.removeEventListener('error', errorHandler);
              reject(e);
          };

          videoElement.addEventListener('seeked', seekHandler);
          videoElement.addEventListener('error', errorHandler);
          videoElement.currentTime = time;
      });
  }

  function renderFrameCard(frameData, index) {
      const card = document.createElement('div');
      card.className = 'frame-card';
      card.style.animationDelay = `${(index % 10) * 0.05}s`;
      
      const timeString = formatTime(frameData.time);
      
      card.innerHTML = `
        <div class="frame-image-container">
            <img src="${frameData.dataUrl}" alt="Frame at ${timeString}" class="frame-image" loading="lazy">
        </div>
        <div class="frame-details">
            <span class="frame-time">${timeString}</span>
            <button class="frame-download" data-index="${index}" title="Download Frame">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </button>
        </div>
      `;
      
      const img = card.querySelector('.frame-image');
      img.addEventListener('click', () => {
          openModal(index);
      });
      
      // Individual download listener
      const downloadBtn = card.querySelector('.frame-download');
      downloadBtn.addEventListener('click', () => {
          downloadImage(frameData.dataUrl, `frame_${timeString.replace(/[:.]/g, '-')}.jpg`);
      });

      gallery.appendChild(card);
  }

  function downloadImage(dataUrl, filename) {
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  }

  function resetState() {
      isExtracting = false;
      extractBtn.disabled = !currentVideoFile;
      cutVideoBtn.disabled = !currentVideoFile;
      fpsInput.disabled = false;
      videoUpload.disabled = false;
  }

  downloadAllBtn.addEventListener('click', async () => {
      if (extractedFrames.length === 0) return;
      if (typeof JSZip === 'undefined') {
          alert("JSZip library not loaded. Cannot download all.");
          return;
      }

      const zip = new JSZip();
      const folder = zip.folder("extracted_frames");
      
      const originalBtnText = downloadAllBtn.innerHTML;
      downloadAllBtn.innerHTML = 'Zipping...';
      downloadAllBtn.disabled = true;

      try {
          extractedFrames.forEach((frame, idx) => {
              const timeString = formatTime(frame.time).replace(/[:.]/g, '-');
              // dataURL looks like data:image/jpeg;base64,...
              const base64Data = frame.dataUrl.split(',')[1];
              folder.file(`frame_${String(idx + 1).padStart(4, '0')}_${timeString}.jpg`, base64Data, {base64: true});
          });

          const content = await zip.generateAsync({type: "blob"});
          
          const a = document.createElement('a');
          a.href = URL.createObjectURL(content);
          a.download = `video_frames_${currentVideoFile.name}.zip`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
      } catch (e) {
          console.error("Error creating zip:", e);
          alert("Failed to create zip file.");
      } finally {
          downloadAllBtn.innerHTML = originalBtnText;
          downloadAllBtn.disabled = false;
      }
  });

  // Modal & Zooming Logic
  let currentZoom = 1;
  let isDragging = false;
  let startX, startY, scrollLeft, scrollTop;
  let currentModalIndex = -1;

  function openModal(index) {
      currentModalIndex = index;
      const frameData = extractedFrames[index];
      modalImage.src = frameData.dataUrl;
      modal.classList.remove('hidden');
      resetZoom();
      updateNavButtons();
  }

  function updateNavButtons() {
      prevImageBtn.disabled = currentModalIndex <= 0;
      nextImageBtn.disabled = currentModalIndex >= extractedFrames.length - 1;
  }

  function showPrevImage() {
      if (currentModalIndex > 0) {
          openModal(currentModalIndex - 1);
      }
  }

  function showNextImage() {
      if (currentModalIndex >= 0 && currentModalIndex < extractedFrames.length - 1) {
          openModal(currentModalIndex + 1);
      }
  }

  let navInterval = null;

  function startNavInterval(action) {
      if (navInterval) clearInterval(navInterval);
      action(); // Trigger immediately
      navInterval = setInterval(action, 150); // Repeat every 150ms for smooth effect
  }

  function stopNavInterval() {
      if (navInterval) {
          clearInterval(navInterval);
          navInterval = null;
      }
  }

  prevImageBtn.addEventListener('mousedown', () => startNavInterval(showPrevImage));
  prevImageBtn.addEventListener('mouseup', stopNavInterval);
  prevImageBtn.addEventListener('mouseleave', stopNavInterval);
  prevImageBtn.addEventListener('touchstart', (e) => { e.preventDefault(); startNavInterval(showPrevImage); });
  prevImageBtn.addEventListener('touchend', stopNavInterval);

  nextImageBtn.addEventListener('mousedown', () => startNavInterval(showNextImage));
  nextImageBtn.addEventListener('mouseup', stopNavInterval);
  nextImageBtn.addEventListener('mouseleave', stopNavInterval);
  nextImageBtn.addEventListener('touchstart', (e) => { e.preventDefault(); startNavInterval(showNextImage); });
  nextImageBtn.addEventListener('touchend', stopNavInterval);

  let slideShowInterval = null;

  function stopSlideShow() {
      if (slideShowInterval) {
          clearInterval(slideShowInterval);
          slideShowInterval = null;
          playIcon.classList.remove('hidden');
          pauseIcon.classList.add('hidden');
      }
  }

  autoPlayBtn.addEventListener('click', () => {
      if (slideShowInterval) {
          stopSlideShow();
      } else {
          if (currentModalIndex >= extractedFrames.length - 1) return; // already at end
          playIcon.classList.add('hidden');
          pauseIcon.classList.remove('hidden');
          slideShowInterval = setInterval(() => {
              if (currentModalIndex < extractedFrames.length - 1) {
                  showNextImage();
              } else {
                  stopSlideShow();
              }
          }, 800); // 800ms per frame
      }
  });

  filterSelect.addEventListener('change', () => {
      const filter = filterSelect.value;
      modalImage.className = '';
      vignetteOverlay.style.opacity = '0';
      if (filter === 'grayscale') modalImage.classList.add('filter-grayscale');
      if (filter === 'vintage') modalImage.classList.add('filter-vintage');
      if (filter === 'warm') modalImage.classList.add('filter-warm');
      if (filter === 'cool') modalImage.classList.add('filter-cool');
      if (filter === 'vignette') vignetteOverlay.style.opacity = '1';
  });

  modalDownloadBtn.addEventListener('click', () => {
      if (currentModalIndex >= 0) {
          const frameData = extractedFrames[currentModalIndex];
          const timeString = formatTime(frameData.time).replace(/[:.]/g, '-');
          const filter = filterSelect.value;
          
          if (filter !== 'none') {
              const tempCanvas = document.createElement('canvas');
              const tempCtx = tempCanvas.getContext('2d');
              const img = new Image();
              img.onload = () => {
                  tempCanvas.width = img.width;
                  tempCanvas.height = img.height;
                  
                  if (filter === 'grayscale') tempCtx.filter = 'grayscale(100%)';
                  if (filter === 'vintage') tempCtx.filter = 'sepia(80%) contrast(120%) saturate(80%)';
                  if (filter === 'warm') tempCtx.filter = 'sepia(50%) saturate(150%) hue-rotate(-20deg)';
                  if (filter === 'cool') tempCtx.filter = 'sepia(30%) saturate(150%) hue-rotate(180deg)';
                  
                  tempCtx.drawImage(img, 0, 0);
                  
                  if (filter === 'vignette') {
                      const gradient = tempCtx.createRadialGradient(tempCanvas.width/2, tempCanvas.height/2, tempCanvas.width/4, tempCanvas.width/2, tempCanvas.height/2, Math.max(tempCanvas.width, tempCanvas.height)/1.5);
                      gradient.addColorStop(0, 'rgba(0,0,0,0)');
                      gradient.addColorStop(1, 'rgba(0,0,0,0.8)');
                      tempCtx.fillStyle = gradient;
                      tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
                  }
                  
                  downloadImage(tempCanvas.toDataURL('image/jpeg', 0.85), `frame_${timeString}_${filter}.jpg`);
              };
              img.src = frameData.dataUrl;
          } else {
              downloadImage(frameData.dataUrl, `frame_${timeString}.jpg`);
          }
      }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('hidden')) {
          if (e.key === 'ArrowLeft') showPrevImage();
          else if (e.key === 'ArrowRight') showNextImage();
          else if (e.key === 'Escape') closeModal();
      }
  });

  function closeModal() {
      stopSlideShow();
      modal.classList.add('hidden');
      setTimeout(() => { modalImage.src = ''; }, 300);
  }

  closeModalBtn.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target === modalBody) {
          closeModal();
      }
  });

  function setZoom(zoom) {
      currentZoom = Math.max(0.1, Math.min(zoom, 5));
      modalImage.style.transform = `scale(${currentZoom})`;
      zoomLevelDisplay.textContent = `${Math.round(currentZoom * 100)}%`;
      
      if (currentZoom > 1) {
          modalImage.style.objectFit = 'none';
          modalImage.style.maxWidth = 'none';
          modalImage.style.maxHeight = 'none';
      } else {
          modalImage.style.objectFit = 'contain';
          modalImage.style.maxWidth = '100%';
          modalImage.style.maxHeight = '100%';
      }
  }

  function resetZoom() {
      setZoom(1);
      modalBody.scrollLeft = 0;
      modalBody.scrollTop = 0;
  }

  zoomInBtn.addEventListener('click', () => setZoom(currentZoom + 0.25));
  zoomOutBtn.addEventListener('click', () => setZoom(currentZoom - 0.25));
  zoomResetBtn.addEventListener('click', resetZoom);

  modalBody.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomChange = e.deltaY > 0 ? -0.1 : 0.1;
      setZoom(currentZoom + zoomChange);
  });

  modalBody.addEventListener('mousedown', (e) => {
      if (currentZoom > 1) {
          isDragging = true;
          startX = e.pageX - modalBody.offsetLeft;
          startY = e.pageY - modalBody.offsetTop;
          scrollLeft = modalBody.scrollLeft;
          scrollTop = modalBody.scrollTop;
      }
  });

  modalBody.addEventListener('mouseleave', () => isDragging = false);
  modalBody.addEventListener('mouseup', () => isDragging = false);
  modalBody.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - modalBody.offsetLeft;
      const y = e.pageY - modalBody.offsetTop;
      const walkX = (x - startX) * 1.5;
      const walkY = (y - startY) * 1.5;
      modalBody.scrollLeft = scrollLeft - walkX;
      modalBody.scrollTop = scrollTop - walkY;
  });
});
