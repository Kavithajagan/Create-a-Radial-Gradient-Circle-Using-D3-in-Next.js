"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const CircleDiagram = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data) return;

    const { OUTTER_DIAMETER, Drawlabel, Nominal_Diameter } = data;

    const width = 400;
    const height = 400;
    const radius = OUTTER_DIAMETER / 2;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Define radial gradient
    const defs = svg.append("defs");
    const radialGradient = defs.append("radialGradient")
      .attr("id", "radial-gradient");

    radialGradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#8c6239");

    radialGradient.append("stop")
      .attr("offset", "50%")
      .attr("stop-color", "#a67c52");

    radialGradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#c69c6d");

    // Draw the circle
    svg.append("circle")
      .attr("r", radius)
      .attr("fill", "url(#radial-gradient)")
      .attr("stroke", "#5a3d1b")
      .attr("stroke-width", "2");

    // Draw label
    svg.append("text")
      .attr("x", 0)
      .attr("y", 5)
      .attr("text-anchor", "middle")
      .attr("fill", "red")
      .attr("font-size", "16px")
      .text(`${Drawlabel} - ${Nominal_Diameter}`);

  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default CircleDiagram;
