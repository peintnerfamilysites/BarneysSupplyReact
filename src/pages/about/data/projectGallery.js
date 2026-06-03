import ray from "../../../assets/ourwork/job1/ray.webp";
import ray1 from "../../../assets/ourwork/job1/ray1.webp";
import ray2 from "../../../assets/ourwork/job1/ray2.webp";
import ray3 from "../../../assets/ourwork/job1/ray3.webp";
import ray4 from "../../../assets/ourwork/job1/ray4.webp";
import ray5 from "../../../assets/ourwork/job1/ray5.webp";
import ray6 from "../../../assets/ourwork/job1/ray6.webp";
import ray7 from "../../../assets/ourwork/job1/ray7.webp";
import ray8 from "../../../assets/ourwork/job1/ray8.webp";
import rayfence from "../../../assets/ourwork/job2/rayfence.webp";
import rayfence1 from "../../../assets/ourwork/job2/rayfence1.webp";
import rayfence2 from "../../../assets/ourwork/job2/rayfence2.webp";

const MAX_IMAGES_PER_PROJECT = 12;
const limitImages = images => images.slice(0, MAX_IMAGES_PER_PROJECT);

export const projectGallery = [
  {
    coverImage: ray,
    title: "Siding Installation",
    location: "ReedsSpring, MO",
    images: limitImages([ray, ray1, ray2, ray3, ray4, ray5, ray6, ray7, ray8]),
  },
  {
    coverImage: rayfence,
    title: "Privacy Fence Installation",
    location: "ReedsSpring, MO",
    images: limitImages([rayfence, rayfence1, rayfence2]),
  },
  {
    coverImage: ray,
    title: "Seamless Gutter System Setup",
    location: "Springfield, MO",
    images: limitImages([ray]),
  },
  {
    coverImage: ray4,
    title: "Commercial Exterior Upgrade",
    location: "Branson, MO",
    images: limitImages([rayfence]),
  },
  {
    coverImage: ray4,
    title: "Residential Roof Replacement",
    location: "Republic, MO",
    images: limitImages([ray4]),
  },
  {
    coverImage: ray6,
    title: "Custom Exterior Accent Siding",
    location: "Bolivar, MO",
    images: limitImages([rayfence2]),
  },
  {
    coverImage: ray2,
    title: "Commercial Leaf Guard Integration",
    location: "Marshfield, MO",
    images: limitImages([ray5]),
  },
  {
    coverImage: ray3,
    title: "Exterior Trim Upgrade",
    location: "Willard, MO",
    images: limitImages([ray3]),
  },
  {
    coverImage: rayfence1,
    title: "Storm Damage Metal-to-Shingle Retrofit",
    location: "Rogersville, MO",
    images: limitImages([ray8]),
  },
  {
    coverImage: ray7,
    title: "Vertical Board & Batten Siding Profile",
    location: "Clever, MO",
    images: limitImages([ray6]),
  },
  {
    coverImage: ray4,
    title: "High-Capacity Downspout Routing",
    location: "Strafford, MO",
    images: limitImages([ray5]),
  },
  {
    coverImage: ray6,
    title: "Modern Exterior Entry Upgrade",
    location: "Battlefield, MO",
    images: limitImages([ray4]),
  },
];
