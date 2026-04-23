"use client";

import { useRef, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const COUNTRY_NAMES: Record<string, string> = {
  "004": "Afghanistan", "008": "Albania", "012": "Algeria", "024": "Angola",
  "032": "Argentina", "036": "Australia", "040": "Austria", "050": "Bangladesh",
  "056": "Belgium", "064": "Bhutan", "068": "Bolivia", "072": "Botswana",
  "070": "Bosnia and Herzegovina", "076": "Brazil", "100": "Bulgaria",
  "104": "Myanmar", "112": "Belarus", "116": "Cambodia", "120": "Cameroon",
  "124": "Canada", "144": "Sri Lanka", "152": "Chile", "156": "China",
  "158": "China", "170": "Colombia", "178": "Congo", "180": "DR Congo",
  "188": "Costa Rica", "191": "Croatia", "192": "Cuba", "203": "Czech Republic",
  "208": "Denmark", "214": "Dominican Republic", "218": "Ecuador", "231": "Ethiopia",
  "233": "Estonia", "246": "Finland", "250": "France", "266": "Gabon",
  "276": "Germany", "288": "Ghana", "300": "Greece", "320": "Guatemala",
  "324": "Guinea", "332": "Haiti", "340": "Honduras", "348": "Hungary",
  "352": "Iceland", "356": "India", "360": "Indonesia", "364": "Iran",
  "368": "Iraq", "372": "Ireland", "376": "Israel", "380": "Italy",
  "384": "Ivory Coast", "388": "Jamaica", "392": "Japan", "398": "Kazakhstan",
  "400": "Jordan", "404": "Kenya", "408": "North Korea", "410": "South Korea",
  "414": "Kuwait", "418": "Laos", "422": "Lebanon", "428": "Latvia",
  "430": "Liberia", "434": "Libya", "440": "Lithuania", "458": "Malaysia",
  "462": "Maldives", "466": "Mali", "478": "Mauritania", "484": "Mexico",
  "496": "Mongolia", "498": "Moldova", "499": "Montenegro", "504": "Morocco",
  "508": "Mozambique", "516": "Namibia", "524": "Nepal", "528": "Netherlands",
  "554": "New Zealand", "558": "Nicaragua", "562": "Niger", "566": "Nigeria",
  "578": "Norway", "586": "Pakistan", "591": "Panama", "598": "Papua New Guinea",
  "600": "Paraguay", "604": "Peru", "608": "Philippines", "616": "Poland",
  "620": "Portugal", "634": "Qatar", "642": "Romania", "643": "Russia",
  "682": "Saudi Arabia", "686": "Senegal", "688": "Serbia", "702": "Singapore",
  "703": "Slovakia", "704": "Vietnam", "706": "Somalia", "710": "South Africa",
  "716": "Zimbabwe", "724": "Spain", "728": "South Sudan", "729": "Sudan",
  "752": "Sweden", "756": "Switzerland", "762": "Tajikistan", "764": "Thailand",
  "784": "United Arab Emirates", "788": "Tunisia", "792": "Turkey",
  "800": "Uganda", "804": "Ukraine", "807": "North Macedonia",
  "818": "Egypt", "826": "United Kingdom", "834": "Tanzania", "840": "United States",
  "854": "Burkina Faso", "858": "Uruguay", "860": "Uzbekistan", "862": "Venezuela",
  "887": "Yemen", "894": "Zambia",
};

// ISO 3166-1 numeric codes
const VISITED = new Set([
  "156", "158", "392", "410", "764", "462", "458",
  "724", "250", "784", "840", "124", "608", "360", "188",
]);

const WISHLIST = new Set([
  "826", // UK
  "380", // Italy
  "704", // Vietnam
  "702", // Singapore
  "484", // Mexico
  "834", // Tanzania
]);

// Countries that should highlight together as one region
const MERGED_REGIONS: Record<string, string> = {
  "156": "china-group",
  "158": "china-group",
};

export default function WorldMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const handleMouseMove = (name: string, e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTooltip({ name, x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div ref={containerRef} className="w-full relative rounded-lg overflow-hidden">
      {tooltip && (
        <div
          className="absolute z-10 px-2 py-1 text-xs text-white bg-gray-900/80 rounded pointer-events-none whitespace-nowrap"
          style={{ left: tooltip.x + 10, top: tooltip.y - 30 }}
        >
          {tooltip.name}
        </div>
      )}

      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 165, center: [0, 10] }}
        style={{ width: "100%", height: "auto", background: "transparent", marginBottom: "-16px" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }: { geographies: { rsmKey: string; id?: string | number }[] }) =>
            geographies.map((geo) => {
              const id = String(geo.id ?? "").padStart(3, "0");
              if (id === "010") return null;
              const visited = VISITED.has(id);
              const wishlist = WISHLIST.has(id);
              const name = COUNTRY_NAMES[id] ?? "";
              const region = MERGED_REGIONS[id];
              const isHovered = region ? hoveredRegion === region : false;
              const baseFill = visited ? "#7a0028" : wishlist ? "#f59e0b" : "#003278";
              const hoverFill = visited ? "#9a0038" : wishlist ? "#d97706" : "#004090";
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHovered ? hoverFill : baseFill}
                  stroke="#ffffff"
                  strokeWidth={0.5}
                  strokeOpacity={0.9}
                  fillOpacity={isHovered ? 0.9 : 0.7}
                  onMouseEnter={(e) => {
                    if (region) setHoveredRegion(region);
                    if (name) handleMouseMove(name, e as unknown as React.MouseEvent);
                  }}
                  onMouseMove={(e) => {
                    if (name) handleMouseMove(name, e as unknown as React.MouseEvent);
                  }}
                  onMouseLeave={() => {
                    setHoveredRegion(null);
                    setTooltip(null);
                  }}
                  style={{
                    default: { outline: "none" },
                    hover: region
                      ? { outline: "none" }
                      : { fill: hoverFill, outline: "none", fillOpacity: 0.9 },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      <div className="flex flex-wrap gap-5 px-4 py-1 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-[#7a0028] inline-block" />
          <span className="text-xs text-gray-400">Been to ({VISITED.size})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-[#f59e0b] inline-block" />
          <span className="text-xs text-gray-400">Want to go</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-[#003278] inline-block" />
          <span className="text-xs text-gray-400">Not yet</span>
        </div>
      </div>
    </div>
  );
}
