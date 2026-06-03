export const gradientPageClass =
  "bg-gradient-to-bl from-black md:via-black md:via-50% via-red-950 to-amber-950 min-h-screen pb-4 md:pb-8";

export const pageContentClass =
  "flex flex-col items-center gap-1 pt-2 w-full animate-fade-in-up";

export const gradientCardBorderClass = `
  w-full relative group overflow-hidden rounded-xl
  bg-gradient-to-r from-black via-red-600 to-yellow-500 p-[1px]
  shadow-lg transition-all duration-300 hover:scale-[1.01]
  hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]
`.trim();

export const homeCardBorderClass = `
  w-full flex flex-col md:block relative group overflow-hidden rounded-xl
  bg-gradient-to-r from-black via-red-600 to-yellow-500 p-[1px]
  shadow-lg transition-all duration-300 hover:scale-[1.02]
  hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]
`.trim();

export const homeCardInnerClass =
  "w-full h-full bg-zinc-950 rounded-xl overflow-hidden relative";

export const footerGraphicClass = `
  h-auto object-contain
  transition-all duration-300
  md:drop-shadow-[0_6px_12px_rgba(239,68,68,0.35)]
`.trim();
