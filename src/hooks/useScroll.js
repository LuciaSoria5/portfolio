import { useEffect } from 'react';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export const useScroll = () => {

  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {

    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const scrollToTop = (options={}) => {
    scroll.scrollToTop(options);
  };

  const scrollToBottom = (options={}) => {
    scroll.scrollToBottom(options);
  };

  const scrollTo = (px=100, options={}) => {
    scroll.scrollTo(px, options); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = (px=100, options={}) => {
    scroll.scrollMore(px, options); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
//   const handleSetActive = (to) => {
//     console.log(to);
//   };

  return {
    scrollToTop,
    scrollToBottom,
    scrollTo,
    scrollMore, 
    // handleSetActive
  };
}