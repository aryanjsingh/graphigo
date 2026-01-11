# Next.js Video Carousel Optimization Prompt

## Context
Building a high-performance looping video carousel in Next.js that plays videos from CDN links. The carousel needs to minimize resource usage, bandwidth consumption, and memory footprint while maintaining smooth playback across devices.

## Core Requirements

### 1. Lazy Loading Implementation
- Use Intersection Observer API to load videos only when they enter viewport
- Set threshold to 0.25 (25% visibility) before triggering load
- Implement unloading mechanism for videos outside viewport to free memory
- Clear video src when scrolled out of view to prevent continuous streaming

### 2. Video Element Optimization
- Set `preload="metadata"` (not "auto") to load only metadata, not full video file
- Use `muted` attribute (carousel videos typically don't need audio)
- Enable `autoPlay` and `loop` for seamless carousel experience
- Add `playsInline` for proper mobile playback
- Include `poster` attribute with thumbnail image for better UX
- Set `width="100%"` and `height="auto"` with `display: block` to prevent spacing issues

### 3. Smart Preloading Strategy
- Only preload the next video in sequence, not all upcoming videos
- Current video gets full preload, adjacent videos get metadata-only preload
- Preload subsequent video when user navigates to new slide
- Store preloaded video src in state to avoid redundant requests

### 4. Video File Optimization (Pre-upload)
- Compress videos using H.264 codec (crf 28 quality level)
- Cap resolution at 720p for carousel use (unless specifically for large screens)
- Keep video duration under 30 seconds for carousel content
- Remove audio track entirely if carousel videos are silent (saves 40-50% file size)
- Consider WebM/VP9 format for additional compression (10-20% smaller than H.264)

### 5. Memory Management
- Implement unloading for videos outside visible range
- Pause video playback before clearing src
- Call `video.load()` to reset video element after clearing src
- Track loaded videos in state to prevent re-initialization
- Clean up Intersection Observer on component unmount

### 6. User Experience Enhancements
- Use React Suspense with fallback UI while carousel initializes
- Show loading placeholder or thumbnail poster while video loads
- Implement error handling for failed CDN requests
- Graceful fallbacks for unsupported video formats

### 7. Browser Compatibility & Codec Selection
- Serve videos in multiple formats prioritized by efficiency:
  1. WebM/VP9 (smallest, Chrome/Firefox)
  2. MP4/H.264 (universal fallback, Safari/older browsers)
- Test on Chrome, Firefox, Safari, and mobile browsers
- Ensure mobile devices use appropriate resolution (max 480p for mobile if separate source available)

### 8. CDN Configuration
- Ensure CDN supports HTTP 206 Range Requests for resumable downloads
- Enable gzip compression for metadata transmission
- Set appropriate Cache-Control headers (e.g., 1 year for versioned assets)
- Use CDN near geographic location of target users

## Technical Stack
- **Framework**: Next.js (App Router preferred for better performance)
- **Rendering**: Client Component ('use client')
- **APIs**: IntersectionObserver, native HTML5 video element
- **State Management**: React hooks (useState, useEffect, useRef)
- **Optional Libraries**: react-intersection-observer for cleaner syntax

## Expected Performance Improvements
- Bandwidth reduction: 60-70% with lazy loading
- Initial load time: 40-50% faster with preload="metadata"
- File size reduction: 30-60% with compression, 40-50% additional with audio removal
- Memory footprint: Continuous savings from unloading off-screen videos

## Code Structure
```
VideoCarousel Component
├── State: currentIndex, visibleVideos map, activeVideoRefs
├── Effects:
│   ├── IntersectionObserver setup on mount
│   ├── Preload next video on index change
│   └── Cleanup observer on unmount
├── Handlers:
│   ├── Carousel navigation (prev/next)
│   ├── Intersection Observer callback
│   └── Memory cleanup for off-screen videos
└── Render:
    ├── Video elements with conditional loading
    ├── Fallback placeholders
    └── Navigation controls
```

## Important Considerations
- Test with real CDN links to measure actual performance impact
- Monitor memory usage with Chrome DevTools (Performance > Memory tab)
- Verify audio/video sync if keeping audio track
- Handle errors gracefully when CDN is slow or unavailable
- Implement analytics to track video load times and playback metrics

## Example Implementation Pattern
1. Map through video sources array
2. Create ref for each video container
3. Observe each ref with IntersectionObserver
4. Conditionally render video only if visible
5. On visibility change, manage preload/unload state
6. Handle carousel navigation with index state
7. Preload adjacent video on navigation
8. Clean up resources on unmount
