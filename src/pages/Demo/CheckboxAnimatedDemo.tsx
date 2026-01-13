import React, { useState } from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { CheckboxAnimated } from "../../components/UI/CheckboxAnimated";
import Collection from "../../components/UI/Collection/Collection";
import { ColorDefinitions } from "../../lib/utils/definitions";

const CheckboxAnimatedDemo: React.FC = () => {

  usePageTitle("Animated checkbox", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Animated checkbox", href: "/demo/animated-checkbox" },
  ]);

  const [checked, setChecked] = React.useState(true);

  return (
    <div>

      <h1>Default</h1>
      <div className="grid mb-3">
        <CheckboxAnimated defaultChecked={checked} onChange={setChecked} />
        <CheckboxAnimated defaultChecked={checked} onChange={setChecked} />
        <CheckboxAnimated disabled={true} defaultChecked={checked} onChange={setChecked} />

      </div>

   <h1>Color</h1>
      <div className="grid mb-3">
        <CheckboxAnimated  defaultChecked={checked} onChange={setChecked} accentColor={ColorDefinitions.Green} />;

      </div>

      <h1>CheckboxList</h1>
      <div className="grid mb-3">
        <Collection
            items={[
                {
                    id: '1',
                    prefix: <CheckboxAnimated defaultChecked={checked} onChange={setChecked} />,
                    content: (
                        <>
                            <span>Call Mr. Markstrom</span>
                            <span>Review the project initial wireframes</span>
                        </>
                    ),
                },
                {
                    id: '2',
                    prefix: <CheckboxAnimated defaultChecked={checked} onChange={setChecked} />,
                    content: (
                        <>
                            <span>Call Mr. Markstrom</span>
                            <span>Review the project initial wireframes</span>
                        </>
                    ),
                },
                {
                    id: '3',
                    prefix: <CheckboxAnimated defaultChecked={checked} onChange={setChecked} />,
                    content: (
                        <>
                            <span>Call Mr. Markstrom</span>
                            <span>Review the project initial wireframes</span>
                        </>
                    ),
                },
            ]}
        />
      </div>
    </div>
  )
};

export default CheckboxAnimatedDemo;