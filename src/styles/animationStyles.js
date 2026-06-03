export const fluidFadeUpStyles = `
  @keyframes fluidFadeUp {
    0% { opacity: 0; transform: translateY(16px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in-up {
    opacity: 0;
    animation: fluidFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
`;
