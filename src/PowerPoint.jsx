import React, { useEffect } from 'react';

const PowerPointViewer = () => {
  const ppsxFileUrl = './assets/a.ppsx'; // Replace with your actual file URL

  useEffect(() => {
    const loadPowerPointSlideShow = async () => {
      try {
        await Office.initialize();

        Office.context.document.bindings.addFromUrlAsync(
          ppsxFileUrl,
          {
            id: 'myBindingId',
            options: {
              fileType: Office.FileType.Ppsx,
            },
          },
          (result) => {
            if (result.status === Office.AsyncResultStatus.Succeeded) {
              console.log('Slide Show loaded successfully:', result.value);
            } else {
              console.error('Error loading Slide Show:', result.error);
            }
          }
        );
      } catch (error) {
        console.error('Office initialization error:', error);
      }
    };

    loadPowerPointSlideShow();
  }, [ppsxFileUrl]);

  return (
    <div>
      <h1>PowerPoint Viewer</h1>
      {/* Add any additional components or UI here */}
    </div>
  );
};

export default PowerPointViewer;
