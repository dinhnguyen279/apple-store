import React, { useState, useEffect, ComponentType } from "react";

interface Props {
  isVisible: boolean;
}
const withScrollAnimation = <P extends Props>(
  WrappedComponent: ComponentType<P>
) => {
  const AnimatedComponent = (props: P) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        const component = document.getElementById("animatedComponent");
        if (component) {
          const componentTop = component.getBoundingClientRect().top;
          const componentHeight = window.innerHeight;
          setIsVisible(componentTop < componentHeight);
          console.log("component", component);
          console.log(
            "componentTop < componentHeight",
            componentTop < componentHeight
          );
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <div id="animatedComponent">
        <WrappedComponent {...props} isVisible={isVisible} />
      </div>
    );
  };

  return AnimatedComponent;
};

export default withScrollAnimation;
