export type GalleryPhoto = {
  src: string;
  caption: string;
  alt: string;
};

function photo(src: string, caption: string): GalleryPhoto {
  const generic = /^(IMG[\s_]|PHOTO |032626 )/i.test(caption);
  return {
    src,
    caption: generic ? "Photograph published on the original photo gallery." : caption,
    alt: generic ? "Cornerstone Craftsman program photograph" : caption,
  };
}

export const galleryHeading = "Capturing Moments, Telling Stories, Celebrating Memories";

export const galleryPhotos: GalleryPhoto[] = [
  photo("/imported/images/2025-09-IMG_6553.jpg", "IMG 6553"),
  photo("/imported/images/2024-05-20230812_111935-scaled.jpg", "Apprentice prepares dry-wall for installation."),
  photo("/imported/images/2025-09-IMG_6891-1.jpg", "IMG 6891"),
  photo("/imported/images/2024-03-Front-small-11-With-Alyia.jpg", "Hanging with future Alexandria City Mayor Alyia Gaskins"),
  photo("/imported/images/2024-04-PHOTO-2024-02-10-13-59-25.jpg", "Student working with plaster and plaster tools."),
  photo("/imported/images/2024-04-kids1.jpeg", "Cornerstone apprentices after a training session."),
  photo("/imported/images/2025-09-IMG_6493.jpg", "IMG 6493"),
  photo(
    "/imported/images/2024-04-PHOTO-2024-01-21-09-22-45-4.jpg",
    "Apprentices becoming familiar with floor covering needed before painting.",
  ),
  photo("/imported/images/2025-09-IMG_6870.jpg", "IMG 6870"),
  photo("/imported/images/2025-09-IMG_6462.jpg", "IMG 6462"),
  photo("/imported/images/2024-03-Front-3Interior-New-suits.jpg", "Two apprentices standing with Alyia Gaskins before the NAACP gala."),
  photo(
    "/imported/images/2024-04-20230319_112215-scaled.jpg",
    "Apprentice perfecting their painting skills in a real work environment.",
  ),
  photo("/imported/images/2024-04-20230304_085920-scaled.jpg", "More lessons in protective covering before painting."),
  photo("/imported/images/2025-09-IMG_6481.jpg", "IMG 6481"),
  photo("/imported/images/2024-04-20230304_0906131-scaled.jpg", "Apprentices preparing the room to be painted."),
  photo("/imported/images/2025-04-Copy-of-Group-Photo_IBEW-Local-6.jpg", "IBEW Local 6"),
  photo("/imported/images/2024-03-Front20230723_142603-2-e1715979383348.jpg", "Group photo."),
  photo("/imported/images/2024-04-20230304_1040491-scaled.jpg", "Apprentices painting an accent wall."),
  photo(
    "/imported/images/2024-04-PHOTO-2024-02-10-13-59-09.jpg",
    "Apprentices learning from a volunteer who is a project manager for a major construction company.",
  ),
  photo(
    "/imported/images/2024-04-PHOTO-2024-02-10-13-59-24.jpg",
    "Students in the next stages of working with plaster and a heat gun.",
  ),
  photo("/imported/images/2025-09-IMG_5930.jpg", "IMG 5930"),
  photo("/imported/images/2024-03-Front-20230425_174944-01.jpg", "Apprentices passing out food at an APD community cookout."),
  photo(
    "/imported/images/2024-04-20230304_1027321-scaled.jpg",
    "Apprentices getting familiar with paintbrushes and cutting techniques.",
  ),
  photo("/imported/images/2025-09-IMG_6573.jpg", "IMG 6573"),
  photo("/imported/images/2025-09-IMG_6757.jpg", "IMG 6757"),
  photo("/imported/images/2025-09-IMG_6483.jpg", "IMG 6483"),
  photo("/imported/images/2025-09-IMG_6935.jpg", "IMG 6935"),
  photo(
    "/imported/images/2024-04-395775645_10160733483173830_4269268061860347575_n.jpg",
    "A group photo with the Mayor of Alexandria, Justin Wilson and Councilman, Kirk McPike.",
  ),
  photo("/imported/images/2024-05-20230930_095646-scaled.jpg", "Apprentice putting his painting skills to work."),
  photo("/imported/images/2024-04-PHOTO-2024-01-21-09-22-40.jpg", "Students attending a HBCU college fair."),
  photo("/imported/images/2025-09-IMG_6589.jpg", "IMG 6589"),
  photo("/imported/images/2025-04-Carpenters-Union-Field-Trip-Youth-e1743790160989.jpeg", "Carpenters Union Field Trip Youth"),
  photo(
    "/imported/images/2024-04-PHOTO-2024-02-10-13-59-25-2.jpg",
    "More lessons in plaster application and drywall finishing.",
  ),
  photo("/imported/images/2025-09-IMG_6381.jpg", "IMG 6381"),
  photo("/imported/images/2024-05-Added-4.25.24-scaled.jpg", "Apprentice learning the proper measuring techniques."),
  photo("/imported/images/2025-09-IMG_6891.jpg", "IMG 6891"),
  photo("/imported/images/2025-09-IMG_5925.jpg", "IMG 5925"),
  photo("/imported/images/2024-04-PHOTO-2024-01-21-09-22-39-4.jpg", "PHOTO 2024 01 21 09 22 39 4"),
  photo("/imported/images/2026-04-032626_MD_CornerStone_11-scaled.jpg", "032626 MD CornerStone 11"),
  photo("/imported/images/2026-04-032626_MD_CornerStone_16-scaled.jpg", "032626 MD CornerStone 16"),
  photo("/imported/images/2026-04-032626_MD_CornerStone_19-scaled.jpg", "032626 MD CornerStone 19"),
  photo("/imported/images/2026-04-032626_MD_CornerStone_20-scaled.jpg", "032626 MD CornerStone 20"),
  photo("/imported/images/2026-04-032626_MD_CornerStone_25-scaled.jpg", "032626 MD CornerStone 25"),
  photo("/imported/images/2026-04-032626_MD_CornerStone_27-scaled.jpg", "032626 MD CornerStone 27"),
  photo("/imported/images/2026-04-032626_MD_CornerStone_49-scaled.jpg", "032626 MD CornerStone 49"),
];
