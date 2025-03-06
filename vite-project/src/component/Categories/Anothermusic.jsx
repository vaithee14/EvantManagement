import { useDispatch, useSelector } from "react-redux";

export default function AnotherMusicEvent() {
  const dispatch = useDispatch();
  const { musicEvents, status, error } = useSelector((state) => state.music);
  console.log(musicEvents, "musicEvents");
  return (
    <>
      <p>Another music component</p>
    </>
  );
}
