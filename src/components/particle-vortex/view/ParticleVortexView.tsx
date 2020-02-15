import React from "react";
import { IParticleVortexView } from "./IParticleVortexView";
import { ParticleVortex } from "particalizor-3000";
import { Styled } from "../styled";
import ContainerDimensions from "react-container-dimensions";

const ParticleVortexShowcaseView: React.FC<IParticleVortexView> = ({
  particleNumberValue,
  particleTraceWidthValue,
  particleLifeTimeValue,
  backgroundColor,
  vortexNumberValue
}) => {
  return (
    <Styled.ShowcaseComponentContainer>
      <ContainerDimensions>
        {({ height, width }) => (
          <ParticleVortex
            imageWidth={width}
            imageHeight={height}
            vortexNumber={vortexNumberValue}
            particleTraceWidth={particleTraceWidthValue}
            particleNumber={particleNumberValue}
            particleLifeTime={particleLifeTimeValue}
            backgroundColor={backgroundColor}
          />
        )}
      </ContainerDimensions>
    </Styled.ShowcaseComponentContainer>
  );
};

export default ParticleVortexShowcaseView;