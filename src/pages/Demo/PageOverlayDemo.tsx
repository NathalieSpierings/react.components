import React, { useEffect } from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";

const PageOverlayDemo: React.FC = () => {

  usePageTitle("Pageoverlay", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Pageoverlay", href: "/demo/pageoverlay" },
  ]);

  const calculateHeight = (): number => {
    const content = document.querySelector('.pageoverlay__container') as HTMLElement;
    if (!content) return 0;

    const contentHeight =
      content.offsetHeight +
      parseInt(window.getComputedStyle(content).marginTop, 10) +
      parseInt(window.getComputedStyle(content).marginBottom, 10);

    const windowHeight = window.innerHeight;
    return windowHeight > contentHeight ? windowHeight : contentHeight;
  };

  const resizeHandler = () => {
    const pageOverlay = document.querySelector('.pageoverlay') as HTMLElement;
    const pageOverlayBackground = document.querySelector('.pageoverlay__background') as HTMLElement;

    if (window.innerHeight < 560 && window.innerWidth > 600) {
      pageOverlay?.classList.add('short');
    } else {
      pageOverlay?.classList.remove('short');
    }

    if (pageOverlayBackground) {
      pageOverlayBackground.style.height = calculateHeight() + 'px';
    }
  };

  useEffect(() => {
    // Attach resize event listener
    window.addEventListener('resize', resizeHandler);

    // Trigger initial resize
    resizeHandler();

    // Open overlay functionality
    const openOverlayElements = document.querySelectorAll('[data-action="pageoverlay"]');
    openOverlayElements.forEach((element) => {
      element.addEventListener('click', () => {
        const pageOverlay = document.querySelector('.pageoverlay') as HTMLElement;
        pageOverlay?.classList.add('shown');
      });
    });

    // Close overlay functionality
    const closeOverlayElements = document.querySelectorAll('[data-dismiss="pageoverlay"]');
    closeOverlayElements.forEach((element) => {
      element.addEventListener('click', () => {
        const pageOverlay = document.querySelector('.pageoverlay') as HTMLElement;
        pageOverlay?.classList.remove('shown');
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const closePageOverlay = () => {
    console.log('Closing....');
    console.log('Closing....');
    const closeOverlayElements = document.querySelectorAll('[data-dismiss="pageoverlay"]');
    closeOverlayElements.forEach((element) => {
      element.addEventListener('click', () => {
        const pageOverlay = document.querySelector('.pageoverlay') as HTMLElement;
        pageOverlay?.classList.remove('shown');
      });
    });
  }
  return (
    <>
      <button className="btn btn-primary pageoverlay-trigger" data-action="pageoverlay">Click me</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <div className="pageoverlay bg-surface">

        <div className="dismiss dismiss--end dismiss--md dismiss--right" data-dismiss="pageoverlay" onClick={closePageOverlay}>
          <div className="dismiss__label ">sluiten</div>
          <div className="dismiss__icon  ">&nbsp;</div>
        </div>



        <div className="pageoverlay__container">
          <div className="pageoverlay__content">
            <div className="centered centered--wide">

              <p>Lorem ipsum dolor sit amet. Et laudantium molestiae vel aspernatur ipsum non voluptatum fuga ex repellat quas est vitae aliquid est quisquam doloribus? Est praesentium nisi aut quas deserunt ut natus illo ut nisi inventore ea ratione doloribus non ratione omnis. </p><p>Ut eaque soluta et velit blanditiis sit possimus aperiam ut blanditiis fuga et officiis sunt. Eum officiis nihil est quae facere qui consequatur debitis aut tenetur consequatur qui velit rerum non quaerat repellendus hic laboriosam error. </p><p>Est illum voluptatum vel perferendis provident ut perferendis tempore est dolores quae ut sint velit qui labore ipsa sit voluptate aperiam. Vel deserunt voluptate non dolore odio qui quis galisum aut neque sequi et internos beatae 33 ipsum quia. </p><p>Et alias facilis et molestiae dolore aut aperiam veniam et nostrum labore aut quod sint aut accusantium nostrum id sint enim. In quia animi hic autem enim et voluptates blanditiis et minus officiis et maiores perferendis et eius sunt non fugiat voluptas. </p><p>Eos ducimus nisi et velit tenetur et commodi rerum et galisum voluptate eos aliquid placeat non laborum nesciunt qui omnis doloremque. Id consectetur omnis qui internos consequuntur sit fugit quas sed doloribus earum qui voluptas nostrum non dolorem tenetur At dicta officia. In nemo deserunt et molestiae quidem id dolorum ratione aut corrupti obcaecati non animi enim sit unde aspernatur! Qui ratione molestiae rem nisi vero eos excepturi nihil ea rerum tempora eum beatae omnis rem deleniti esse eos rerum placeat. </p><p>Ab inventore aliquam est minima nihil non delectus optio ut nostrum consequatur ut numquam itaque ex consequatur deleniti ut nemo rerum. Et quia unde et voluptates porro ut voluptates obcaecati. Et nihil maiores ut totam doloribus et cumque voluptatem a voluptate nihil et beatae dolores eos autem galisum. </p><p>Et quod nihil ut tempora quia sit fugiat vitae sit dolor eveniet. Ea rerum quia cum voluptates enim sed debitis fugiat eum tempora harum et dolores commodi id recusandae autem. Qui quibusdam magnam ut quisquam minus ea unde quia ut dicta possimus qui inventore saepe. Et eveniet perspiciatis sed dolor fuga sed dolorem quia! </p><p>Sed maxime explicabo vel expedita magni eum vitae nemo sed facere voluptatem. Et nostrum sint est voluptatem voluptate cum commodi voluptatem eos molestiae explicabo. </p><p>Et galisum ullam qui autem veniam ut quam officiis. Et blanditiis praesentium et nemo eligendi sit unde voluptatum ex veritatis quia ut voluptates sint est autem maiores hic neque fugiat. Hic fugit mollitia est tempora aliquid ut tempore perferendis. Sed delectus reprehenderit ad culpa animi et dolorem velit qui adipisci numquam sed quibusdam iste et esse reprehenderit eos accusantium eligendi. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default PageOverlayDemo;