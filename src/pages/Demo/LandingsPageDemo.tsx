import React, { ReactNode, useEffect, useState } from "react";
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from "../../lib/utils/definitions";
import { useLayoutContext } from "../../components/Providers/LayoutContext";
import { WidgetProps } from "../../components/UI/Widget";
import { ArtAanlevering, ArtContract, ArtDossier, ArtIgo, ArtKetenzorg, ArtMeekijkconsult, ArtPopulatiebekostiging, ArtTicket, ArtVerbruiksmiddel } from "../../components/Base/Art";
import { Icon } from "../../components/UI/Icons/Icon";
import { Button } from "../../components/UI/Button";
import ArtDocument from "../../components/Base/Art/ArtDocument";
import LandingsPage from "../../components/Page/LandingsPage/LandingsPage";


const LandingsPageDemo: React.FC = () => {

    const { setFullscreen } = useLayoutContext();
    const { setShowHeader } = useLayoutContext();
    const { setHasSidebars } = useLayoutContext();

    useEffect(() => {
        setFullscreen(true);
        setShowHeader(false);
        setHasSidebars(false);
        return () => {
            setFullscreen(false);
            setShowHeader(true);
            setHasSidebars(true);
        };
    }, [setFullscreen, setShowHeader, setHasSidebars]);


    const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
    const [bottomSheetContent, setBottomSheetContent] = useState<ReactNode>(null);

        
    const widgetsData: WidgetProps[] = [{
        image: <ArtAanlevering />,
        background: ColorDefinitions.SurfaceDark,
        contentPositon: "center" as const,
        widgetContent: (
            <>
                <Icon
                    icon={IconDefinitions.bell}
                    variant="circle"
                    size={SizeDefinitions.ExtraSmall}
                    background={ColorDefinitions.Red}
                    shadowFromColor={ColorDefinitions.Red}
                    borderColor={ColorDefinitions.Red}
                    iconCss="shockwave notify"
                    onClick={() => {
                        setBottomSheetOpen(!bottomSheetOpen);
                        setBottomSheetContent('Aanlevering bottomsheet content goes here....')
                    }}
                />
                <h4>Aanlevering</h4>
                <p>Lorum ipsum dolomiet</p>
                <Button color={ColorDefinitions.SurfaceLight} shadow css="mt-2">
                    Naar aanlevering
                </Button>
            </>
        ),
    },
    {
        image: <ArtDossier />,
        background: ColorDefinitions.SurfaceDark,
        contentPositon: "center",
        widgetContent: (
            <>
                <Icon
                    icon={IconDefinitions.bell}
                    variant="circle"
                    size={SizeDefinitions.ExtraSmall}
                    background={ColorDefinitions.Red}
                    shadowFromColor={ColorDefinitions.Red}
                    borderColor={ColorDefinitions.Red}
                    iconCss="shockwave notify"
                    onClick={() => {
                        setBottomSheetOpen(!bottomSheetOpen);
                        setBottomSheetContent('Dossiers bottomsheet content goes here....')
                    }}
                />
                <h4>Dossiers</h4>
                <p>Lorum ipsum dolomiet</p>
                <Button color={ColorDefinitions.SurfaceLight} shadow css="mt-2">
                    Naar dossiers
                </Button>
            </>
        ),
    },
    {
        image: <ArtDocument />,
        background: ColorDefinitions.SurfaceDark,
        contentPositon: "center",
        widgetContent: (
            <>
                <h4>Documenten</h4>
                <p>Lorum ipsum dolomiet</p>
                <Button color={ColorDefinitions.SurfaceLight} shadow css="mt-2">
                    Naar documenten
                </Button>
            </>
        ),
    },
    {
        image: <ArtKetenzorg />,
        background: ColorDefinitions.SurfaceDark,
        contentPositon: "center",
        widgetContent: (
            <>
                <h4>Ketenzorg</h4>
                <p>Lorum ipsum dolomiet</p>
                <Button color={ColorDefinitions.SurfaceLight} shadow css="mt-2">
                    Naar machtigingen
                </Button>
            </>
        ),
    },
    {
        image: <ArtIgo />,
        background: ColorDefinitions.SurfaceDark,
        contentPositon: "center",
        widgetContent: (
            <>
                <h4>Integrale geboortezorg</h4>
                <p>Lorum ipsum dolomiet</p>
                <Button color={ColorDefinitions.SurfaceLight} shadow css="mt-2">
                    Naar integrale geboortezorg
                </Button>
            </>
        ),
    },
    {
        image: <ArtVerbruiksmiddel />,
        background: ColorDefinitions.SurfaceDark,
        contentPositon: "center",
        widgetContent: (
            <>
                <h4>Verbruiksmiddelen</h4>
                <p>Lorum ipsum dolomiet</p>
                <Button color={ColorDefinitions.SurfaceLight} shadow css="mt-2">
                    Naar verbruiksmiddelen
                </Button>
            </>
        ),
    },
    {
        image: <ArtPopulatiebekostiging />,
        background: ColorDefinitions.SurfaceDark,
        contentPositon: "center",
        widgetContent: (
            <>
                <h4>Populatiebekostiging</h4>
                <p>Lorum ipsum dolomiet</p>
                <Button color={ColorDefinitions.SurfaceLight} shadow css="mt-2">
                    Naar populatiebekostiging
                </Button>
            </>
        ),
    },
    {
        image: <ArtMeekijkconsult />,
        background: ColorDefinitions.SurfaceDark,
        contentPositon: "center",
        widgetContent: (
            <>
                <h4>Meekijkconsulten</h4>
                <p>Lorum ipsum dolomiet</p>
                <Button color={ColorDefinitions.SurfaceLight} shadow css="mt-2">
                    Naar meekijkconsulten
                </Button>
            </>
        ),
    },
    {
        image: <ArtContract />,
        background: ColorDefinitions.SurfaceDark,
        contentPositon: "center",
        widgetContent: (
            <>
                <h4>Contracten</h4>
                <p>Lorum ipsum dolomiet</p>
                <Button color={ColorDefinitions.SurfaceLight} shadow css="mt-2">
                    Naar contracten
                </Button>
            </>
        ),
    },
    {
        image: <ArtTicket />,
        background: ColorDefinitions.SurfaceDark,
        contentPositon: "center",
        widgetContent: (
            <>
                <h4>Tickets</h4>
                <p>Lorum ipsum dolomiet</p>
                <Button color={ColorDefinitions.SurfaceLight} shadow css="mt-2">
                    Naar tickets
                </Button>
            </>
        ),
    }
    ]
    

    return (
        <LandingsPage 
            widgets={widgetsData}
            bottomSheetOpen={bottomSheetOpen}
            setBottomSheetOpen={setBottomSheetOpen}
            bottomSheetContent={bottomSheetContent}
            authName="John Doe"

        />
    )
}
export default LandingsPageDemo;