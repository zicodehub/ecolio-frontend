import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default ({children}) => {
    return (
      <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, zoomToElement, ...rest }) => (
          <React.Fragment>
            <div className="tools">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>x</button>
              <button onClick={() => zoomToElement()}>zoomToElement</button>
            </div>
            <TransformComponent>
            	{
            		children
            	}
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    )
}