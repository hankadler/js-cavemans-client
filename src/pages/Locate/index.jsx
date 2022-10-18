import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export default function Locate() {
  // const destination = "steakhouse+near+me";
  const [longitude, setLongitude] = useState("-74.0060");
  const [latitude, setLatitude] = useState("40.712800");

  // on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setLongitude(coords.longitude);
        setLatitude(coords.latitude);
      });
    }
  }, []);

  return (
    <LocateDiv>
      <h1>Caveman&apos;s Near You</h1>
      <iframe
        title="steakhouse-near-me"
        src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: ".5em" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <pre>For demonstration purposes only!</pre>
    </LocateDiv>
  );
}

const LocateDiv = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;
