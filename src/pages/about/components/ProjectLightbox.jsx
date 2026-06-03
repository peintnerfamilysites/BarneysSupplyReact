import { useEffect } from "react";

function IconButton({ ariaLabel, className, children, onClick }) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center rounded-full border border-white/10 bg-zinc-950/75 text-white shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-200 hover:border-red-500/60 hover:bg-red-950/40 hover:scale-105 active:scale-95 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function ArrowIcon({ direction = "next" }) {
  return (
    <svg
      className={`h-5 w-5 transition-transform duration-200 ${
        direction === "previous" ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d={direction === "previous" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  );
}

function ProjectThumbnailStrip({ images, currentImageIndex, onSelectImage }) {
  if (images.length <= 1) return null;

  return (
    <div className="mt-4 flex max-w-full items-center justify-center gap-2 overflow-x-auto px-2 pb-1">
      {images.map((image, index) => (
        <button
          key={`${image}-${index}`}
          type="button"
          aria-label={`View project image ${index + 1}`}
          className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition-all duration-200 ${
            index === currentImageIndex
              ? "border-red-500 opacity-100 shadow-[0_0_18px_rgba(239,68,68,0.35)]"
              : "border-white/10 opacity-45 hover:border-yellow-500/60 hover:opacity-85"
          }`}
          onClick={event => {
            event.stopPropagation();
            onSelectImage(index);
          }}
        >
          <img
            src={image}
            alt="Project preview thumbnail"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </button>
      ))}
    </div>
  );
}

export default function ProjectLightbox({
  currentImage,
  currentImageIndex,
  currentProject,
  currentProjectImages,
  closeLightbox,
  nextImage,
  prevImage,
  selectImage,
}) {
  const hasMultipleImages = currentProjectImages.length > 1;

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "Escape") closeLightbox();
      if (!hasMultipleImages) return;
      if (event.key === "ArrowRight") nextImage(event);
      if (event.key === "ArrowLeft") prevImage(event);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, hasMultipleImages, nextImage, prevImage]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/90 px-3 py-5 backdrop-blur-xl animate-[fadeIn_0.18s_ease-out] md:px-8 md:py-8"
      onClick={closeLightbox}
      role="dialog"
      aria-modal="true"
      aria-label={`${currentProject.title} project image viewer`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.12),transparent_28%)]" />
      <img
        src={currentImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-2xl saturate-125"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/55" />

      <button
        type="button"
        className="absolute right-4 top-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-2xl font-light text-zinc-300 shadow-xl backdrop-blur-md transition-all duration-200 hover:border-red-500/60 hover:text-white hover:scale-105 active:scale-95 md:right-8 md:top-6"
        onClick={event => {
          event.stopPropagation();
          closeLightbox();
        }}
        aria-label="Close project image viewer"
      >
        ×
      </button>

      <div
        className="relative z-10 flex w-full max-w-7xl flex-col items-center"
        onClick={event => event.stopPropagation()}
      >
        <div className="mb-3 flex w-full max-w-4xl flex-col gap-1.5 text-center md:mb-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-red-400">
            Our Recent Work
          </p>
          <h3 className="text-xl font-black tracking-tight text-white md:text-3xl">
            {currentProject.title}
          </h3>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
            {currentProject.location} · Image {currentImageIndex + 1} of {currentProjectImages.length}
          </p>
        </div>

        <div className="relative flex w-full items-center justify-center">
          {hasMultipleImages && (
            <IconButton
              ariaLabel="Previous project image"
              className="group absolute left-2 z-20 h-11 w-11 md:-left-4 md:h-12 md:w-12 lg:left-0"
              onClick={prevImage}
            >
              <ArrowIcon direction="previous" />
            </IconButton>
          )}

          <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-[0_28px_90px_rgba(0,0,0,0.72)]">
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
            <div className="relative h-[68vh] min-h-[420px] overflow-hidden rounded-2xl bg-black md:h-[72vh]">
              <img
                key={`${currentImage}-background`}
                src={currentImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45 blur-xl saturate-125 animate-[scaleIn_0.18s_ease-out]"
              />
              <div className="absolute inset-0 bg-black/25" />
              <img
                key={currentImage}
                src={currentImage}
                alt={`${currentProject.title} in ${currentProject.location}`}
                className="relative z-10 h-full w-full object-cover animate-[scaleIn_0.18s_ease-out]"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
            </div>
          </div>

          {hasMultipleImages && (
            <IconButton
              ariaLabel="Next project image"
              className="group absolute right-2 z-20 h-11 w-11 md:-right-4 md:h-12 md:w-12 lg:right-0"
              onClick={nextImage}
            >
              <ArrowIcon />
            </IconButton>
          )}
        </div>

        <ProjectThumbnailStrip
          images={currentProjectImages}
          currentImageIndex={currentImageIndex}
          onSelectImage={selectImage}
        />

        <p className="mt-3 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
          Use arrow keys to browse · Press Esc to close
        </p>
      </div>
    </div>
  );
}
