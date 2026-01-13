import React, { useState } from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { ColorDefinitions } from "../../lib/utils/definitions";
import { Button } from "../../components/UI/Button";
import { Loader } from "../../components/UI/Loader";

const LoaderDemo: React.FC = () => {
    usePageTitle("Loader", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Loader", href: "/demo/loader" },
    ]);

    const [showLoader1, setShowLoader1] = useState(false);
    const [showLoader2, setShowLoader2] = useState(false);
    const [showLoader3, setShowLoader3] = useState(false);
    const [showLoader4, setShowLoader4] = useState(false);
    const [showLoader5, setShowLoader5] = useState(false);
    const [showLoader6, setShowLoader6] = useState(false);
    const [showLoader7, setShowLoader7] = useState(false);
    const [showLoader8, setShowLoader8] = useState(false);

    return (
         <>
            <h3>Default</h3>
            <Button onClick={() => { setShowLoader1(true) }}>Click me!</Button>
            <Loader loading={showLoader1}/>

            <h3>Background</h3>
            <Button onClick={() => { setShowLoader2(true) }}>Click me!</Button>
            <Loader loading={showLoader2} background={ColorDefinitions.SurfaceDark}/>


            <h3>Centered</h3>
            <Button onClick={() => { setShowLoader8(true) }}>Click me!</Button>
            <Loader loading={showLoader8} centered={true}/>

            <h3>Overlay</h3>
            <Button onClick={() => { setShowLoader3(true) }}>Click me!</Button>
            <Loader loading={showLoader3} showOverlay={true}/>


            <h3>Without labels</h3>
            <Button onClick={() => { setShowLoader4(true) }}>Click me!</Button>
            <Loader loading={showLoader4} showLabels={false}/>


            <h3>Without animation</h3>
            <Button onClick={() => { setShowLoader5(true) }}>Click me!</Button>
            <Loader loading={showLoader5} showAnimation={false}/>


            <h3>Animation color</h3>
            <Button onClick={() => { setShowLoader6(true) }}>Click me!</Button>
            <Loader loading={showLoader6} animationColor={ColorDefinitions.Green}/> 
       

            <h3>Text color</h3>
            <Button onClick={() => { setShowLoader7(true) }}>Click me!</Button>
            <Loader loading={showLoader7} labelColor={ColorDefinitions.Green}/>



            <div>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Dui montes mollis hendrerit orci ex. Nam cursus nam auctor netus nulla porta; ultrices ipsum ipsum. Pellentesque orci mauris dignissim vulputate metus integer. Arcu libero dis a adipiscing porttitor rhoncus condimentum. Ipsum rutrum turpis auctor curabitur molestie pulvinar eros justo. Sagittis non nec mi tempus cursus ultricies. Dictum suscipit morbi potenti nam eu proin tortor.

                Sapien primis quis tempus vitae platea ut ante vivamus. Mattis elit porttitor aliquet risus magnis; lobortis eget. Suspendisse conubia montes etiam morbi id hendrerit rhoncus himenaeos. Venenatis lectus nascetur proin morbi accumsan lacinia. Magnis nisi urna ultrices orci parturient habitasse. Commodo rhoncus proin massa nascetur consequat proin nullam. Imperdiet dignissim vel libero nisl non. Ex adipiscing non sed quis fames platea neque maximus. Pharetra ultricies ad montes inceptos imperdiet curae donec. Cubilia mattis ac quisque vel maximus bibendum netus auctor.

                Venenatis ad orci sagittis lacus per. Eros sit sodales facilisi dis vehicula egestas justo convallis morbi. Class nisl class; dapibus dignissim purus ultricies. Integer dui finibus id nec, sapien taciti mollis per. Natoque placerat tempor; at ornare senectus duis sit leo. Et hac porttitor convallis habitasse nascetur efficitur. Neque curabitur lacus vehicula velit pulvinar accumsan eros. Maximus mi dignissim primis dui est ex consectetur dis. Metus semper elementum sociosqu semper nunc.

                Dolor class natoque ridiculus taciti per vestibulum. Ligula at elit maximus duis, consequat orci enim pulvinar. Sollicitudin suspendisse vel torquent ullamcorper finibus non? Rutrum hendrerit urna inceptos accumsan fringilla suscipit. Fusce quis euismod eros gravida placerat imperdiet. Maecenas purus taciti consequat sagittis ullamcorper. Class est nibh ipsum morbi in. Mattis sit pharetra sem habitant felis posuere gravida nec fringilla.

                Pulvinar elementum penatibus etiam ipsum elementum mollis iaculis malesuada ligula. Eleifend in viverra malesuada conubia rutrum ad. Iaculis penatibus vivamus placerat non bibendum condimentum. Semper facilisi ullamcorper inceptos orci blandit volutpat tempus. Ante dui porta nostra id massa aenean nam. Donec tortor maximus dictum condimentum ad posuere. Laoreet sodales iaculis nullam placerat pharetra justo hac quis accumsan.
              </div>
              <div>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Dui montes mollis hendrerit orci ex. Nam cursus nam auctor netus nulla porta; ultrices ipsum ipsum. Pellentesque orci mauris dignissim vulputate metus integer. Arcu libero dis a adipiscing porttitor rhoncus condimentum. Ipsum rutrum turpis auctor curabitur molestie pulvinar eros justo. Sagittis non nec mi tempus cursus ultricies. Dictum suscipit morbi potenti nam eu proin tortor.

                Sapien primis quis tempus vitae platea ut ante vivamus. Mattis elit porttitor aliquet risus magnis; lobortis eget. Suspendisse conubia montes etiam morbi id hendrerit rhoncus himenaeos. Venenatis lectus nascetur proin morbi accumsan lacinia. Magnis nisi urna ultrices orci parturient habitasse. Commodo rhoncus proin massa nascetur consequat proin nullam. Imperdiet dignissim vel libero nisl non. Ex adipiscing non sed quis fames platea neque maximus. Pharetra ultricies ad montes inceptos imperdiet curae donec. Cubilia mattis ac quisque vel maximus bibendum netus auctor.

                Venenatis ad orci sagittis lacus per. Eros sit sodales facilisi dis vehicula egestas justo convallis morbi. Class nisl class; dapibus dignissim purus ultricies. Integer dui finibus id nec, sapien taciti mollis per. Natoque placerat tempor; at ornare senectus duis sit leo. Et hac porttitor convallis habitasse nascetur efficitur. Neque curabitur lacus vehicula velit pulvinar accumsan eros. Maximus mi dignissim primis dui est ex consectetur dis. Metus semper elementum sociosqu semper nunc.

                Dolor class natoque ridiculus taciti per vestibulum. Ligula at elit maximus duis, consequat orci enim pulvinar. Sollicitudin suspendisse vel torquent ullamcorper finibus non? Rutrum hendrerit urna inceptos accumsan fringilla suscipit. Fusce quis euismod eros gravida placerat imperdiet. Maecenas purus taciti consequat sagittis ullamcorper. Class est nibh ipsum morbi in. Mattis sit pharetra sem habitant felis posuere gravida nec fringilla.

                Pulvinar elementum penatibus etiam ipsum elementum mollis iaculis malesuada ligula. Eleifend in viverra malesuada conubia rutrum ad. Iaculis penatibus vivamus placerat non bibendum condimentum. Semper facilisi ullamcorper inceptos orci blandit volutpat tempus. Ante dui porta nostra id massa aenean nam. Donec tortor maximus dictum condimentum ad posuere. Laoreet sodales iaculis nullam placerat pharetra justo hac quis accumsan.
              </div>
              <div>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Dui montes mollis hendrerit orci ex. Nam cursus nam auctor netus nulla porta; ultrices ipsum ipsum. Pellentesque orci mauris dignissim vulputate metus integer. Arcu libero dis a adipiscing porttitor rhoncus condimentum. Ipsum rutrum turpis auctor curabitur molestie pulvinar eros justo. Sagittis non nec mi tempus cursus ultricies. Dictum suscipit morbi potenti nam eu proin tortor.

                Sapien primis quis tempus vitae platea ut ante vivamus. Mattis elit porttitor aliquet risus magnis; lobortis eget. Suspendisse conubia montes etiam morbi id hendrerit rhoncus himenaeos. Venenatis lectus nascetur proin morbi accumsan lacinia. Magnis nisi urna ultrices orci parturient habitasse. Commodo rhoncus proin massa nascetur consequat proin nullam. Imperdiet dignissim vel libero nisl non. Ex adipiscing non sed quis fames platea neque maximus. Pharetra ultricies ad montes inceptos imperdiet curae donec. Cubilia mattis ac quisque vel maximus bibendum netus auctor.

                Venenatis ad orci sagittis lacus per. Eros sit sodales facilisi dis vehicula egestas justo convallis morbi. Class nisl class; dapibus dignissim purus ultricies. Integer dui finibus id nec, sapien taciti mollis per. Natoque placerat tempor; at ornare senectus duis sit leo. Et hac porttitor convallis habitasse nascetur efficitur. Neque curabitur lacus vehicula velit pulvinar accumsan eros. Maximus mi dignissim primis dui est ex consectetur dis. Metus semper elementum sociosqu semper nunc.

                Dolor class natoque ridiculus taciti per vestibulum. Ligula at elit maximus duis, consequat orci enim pulvinar. Sollicitudin suspendisse vel torquent ullamcorper finibus non? Rutrum hendrerit urna inceptos accumsan fringilla suscipit. Fusce quis euismod eros gravida placerat imperdiet. Maecenas purus taciti consequat sagittis ullamcorper. Class est nibh ipsum morbi in. Mattis sit pharetra sem habitant felis posuere gravida nec fringilla.

                Pulvinar elementum penatibus etiam ipsum elementum mollis iaculis malesuada ligula. Eleifend in viverra malesuada conubia rutrum ad. Iaculis penatibus vivamus placerat non bibendum condimentum. Semper facilisi ullamcorper inceptos orci blandit volutpat tempus. Ante dui porta nostra id massa aenean nam. Donec tortor maximus dictum condimentum ad posuere. Laoreet sodales iaculis nullam placerat pharetra justo hac quis accumsan.
              </div>
              <div>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Dui montes mollis hendrerit orci ex. Nam cursus nam auctor netus nulla porta; ultrices ipsum ipsum. Pellentesque orci mauris dignissim vulputate metus integer. Arcu libero dis a adipiscing porttitor rhoncus condimentum. Ipsum rutrum turpis auctor curabitur molestie pulvinar eros justo. Sagittis non nec mi tempus cursus ultricies. Dictum suscipit morbi potenti nam eu proin tortor.

                Sapien primis quis tempus vitae platea ut ante vivamus. Mattis elit porttitor aliquet risus magnis; lobortis eget. Suspendisse conubia montes etiam morbi id hendrerit rhoncus himenaeos. Venenatis lectus nascetur proin morbi accumsan lacinia. Magnis nisi urna ultrices orci parturient habitasse. Commodo rhoncus proin massa nascetur consequat proin nullam. Imperdiet dignissim vel libero nisl non. Ex adipiscing non sed quis fames platea neque maximus. Pharetra ultricies ad montes inceptos imperdiet curae donec. Cubilia mattis ac quisque vel maximus bibendum netus auctor.

                Venenatis ad orci sagittis lacus per. Eros sit sodales facilisi dis vehicula egestas justo convallis morbi. Class nisl class; dapibus dignissim purus ultricies. Integer dui finibus id nec, sapien taciti mollis per. Natoque placerat tempor; at ornare senectus duis sit leo. Et hac porttitor convallis habitasse nascetur efficitur. Neque curabitur lacus vehicula velit pulvinar accumsan eros. Maximus mi dignissim primis dui est ex consectetur dis. Metus semper elementum sociosqu semper nunc.

                Dolor class natoque ridiculus taciti per vestibulum. Ligula at elit maximus duis, consequat orci enim pulvinar. Sollicitudin suspendisse vel torquent ullamcorper finibus non? Rutrum hendrerit urna inceptos accumsan fringilla suscipit. Fusce quis euismod eros gravida placerat imperdiet. Maecenas purus taciti consequat sagittis ullamcorper. Class est nibh ipsum morbi in. Mattis sit pharetra sem habitant felis posuere gravida nec fringilla.

                Pulvinar elementum penatibus etiam ipsum elementum mollis iaculis malesuada ligula. Eleifend in viverra malesuada conubia rutrum ad. Iaculis penatibus vivamus placerat non bibendum condimentum. Semper facilisi ullamcorper inceptos orci blandit volutpat tempus. Ante dui porta nostra id massa aenean nam. Donec tortor maximus dictum condimentum ad posuere. Laoreet sodales iaculis nullam placerat pharetra justo hac quis accumsan.
              </div>
              <div>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Dui montes mollis hendrerit orci ex. Nam cursus nam auctor netus nulla porta; ultrices ipsum ipsum. Pellentesque orci mauris dignissim vulputate metus integer. Arcu libero dis a adipiscing porttitor rhoncus condimentum. Ipsum rutrum turpis auctor curabitur molestie pulvinar eros justo. Sagittis non nec mi tempus cursus ultricies. Dictum suscipit morbi potenti nam eu proin tortor.

                Sapien primis quis tempus vitae platea ut ante vivamus. Mattis elit porttitor aliquet risus magnis; lobortis eget. Suspendisse conubia montes etiam morbi id hendrerit rhoncus himenaeos. Venenatis lectus nascetur proin morbi accumsan lacinia. Magnis nisi urna ultrices orci parturient habitasse. Commodo rhoncus proin massa nascetur consequat proin nullam. Imperdiet dignissim vel libero nisl non. Ex adipiscing non sed quis fames platea neque maximus. Pharetra ultricies ad montes inceptos imperdiet curae donec. Cubilia mattis ac quisque vel maximus bibendum netus auctor.

                Venenatis ad orci sagittis lacus per. Eros sit sodales facilisi dis vehicula egestas justo convallis morbi. Class nisl class; dapibus dignissim purus ultricies. Integer dui finibus id nec, sapien taciti mollis per. Natoque placerat tempor; at ornare senectus duis sit leo. Et hac porttitor convallis habitasse nascetur efficitur. Neque curabitur lacus vehicula velit pulvinar accumsan eros. Maximus mi dignissim primis dui est ex consectetur dis. Metus semper elementum sociosqu semper nunc.

                Dolor class natoque ridiculus taciti per vestibulum. Ligula at elit maximus duis, consequat orci enim pulvinar. Sollicitudin suspendisse vel torquent ullamcorper finibus non? Rutrum hendrerit urna inceptos accumsan fringilla suscipit. Fusce quis euismod eros gravida placerat imperdiet. Maecenas purus taciti consequat sagittis ullamcorper. Class est nibh ipsum morbi in. Mattis sit pharetra sem habitant felis posuere gravida nec fringilla.

                Pulvinar elementum penatibus etiam ipsum elementum mollis iaculis malesuada ligula. Eleifend in viverra malesuada conubia rutrum ad. Iaculis penatibus vivamus placerat non bibendum condimentum. Semper facilisi ullamcorper inceptos orci blandit volutpat tempus. Ante dui porta nostra id massa aenean nam. Donec tortor maximus dictum condimentum ad posuere. Laoreet sodales iaculis nullam placerat pharetra justo hac quis accumsan.
              </div>
        </>
    )
}
export default LoaderDemo;