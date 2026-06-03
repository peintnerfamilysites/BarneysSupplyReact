import { useMemo, useState } from "react";

export function useProjectLightbox(projects) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProject = projects[currentProjectIndex];
  const currentProjectImages = currentProject.images;

  const imageState = useMemo(() => {
    const prevImageIndex =
      (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
    const nextImageIndex = (currentImageIndex + 1) % currentProjectImages.length;

    return {
      currentImage: currentProjectImages[currentImageIndex],
      prevPreviewImage: currentProjectImages[prevImageIndex],
      nextPreviewImage: currentProjectImages[nextImageIndex],
    };
  }, [currentImageIndex, currentProjectImages]);

  const openLightbox = index => {
    setCurrentProjectIndex(index);
    setCurrentImageIndex(0);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = e => {
    e?.stopPropagation?.();
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % currentProjectImages.length);
  };

  const prevImage = e => {
    e?.stopPropagation?.();
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? currentProjectImages.length - 1 : prevIndex - 1,
    );
  };

  const selectImage = index => {
    setCurrentImageIndex(index);
  };

  return {
    isOpen,
    currentProject,
    currentProjectImages,
    currentImageIndex,
    ...imageState,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
    selectImage,
  };
}
