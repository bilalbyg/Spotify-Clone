import { Icon } from "../../Icons";
import { secondsToTime } from "../../utils";
import { useAudio } from "react-use";
import CustomRange from "../CustomRange";
import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setControls, setPlaying, setSidebar } from "../stores/player";

function Player() {
  const dispatch = useDispatch();

  const { current, sidebar } = useSelector((state) => state.player);

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  useEffect(() => {
    controls.play;
  }, [current]);

useEffect(() => {dispatch(setPlaying(state.playing))}, [state.playing])

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) {
      return "muted";
    }

    if (state.volume > 0 && state.volume < 0.33) {
      return "lowvolume";
    }

    if (state.volume >= 0.33 && state.volume < 0.66) {
      return "normalvolume";
    }
    return "highvolume";
  }, [state.volume, state.muted]);

  return (
    <div className="flex justify-between items-center h-full px-4">
      <div className="min-w-[11.25rem] w-[30%] flex items-center">
        {current && (
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              {!sidebar && (
                <div className="w-14 h-14 mr-3 relative group flex-shrink-0">
                  <img src={current.image} alt="" />
                  <button
                  onClick={() => dispatch(setSidebar(true))}
                    className="w-6 h-6 bg-black rotate-90 rounded-full absolute top-1.5 
                                  right-1.5 opacity-0 hover:scale-[1.06] hover:opacity-100 group-hover:opacity-80 flex items-center justify-center"
                  ></button>
                </div>
              )}
              <div>
                <h6 className="text-sm">{current.title}</h6>
                <p className="text-[0.688rem] text-white text-opacity-70">
                  {current.artist}
                </p>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-white">
              <Icon size={16} name="playerlike" />
            </button>
          </div>
        )}
      </div>
      <div className="max-w-[45.125rem] w-[40%] flex flex-col px-4 items-center">
        <div className="flex items-center gap-x-2">
          <button
            className="w-8 h-8 flex items-center justify-center 
                            text-white text-opacity-70 hover:text-opacity-100"
          >
            <Icon name="shuffle" size="22" />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center
           text-white text-opacity-70 hover:text-opacity-100"
          >
            <Icon name="playerprev" size="22" />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-8 h-8 flex items-center justify-center
          bg-white text-black rounded-full hover:scale-[1.06]"
          >
            <Icon size="16" name={state?.playing ? "pause" : "play"} />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center 
          text-white text-opacity-70 hover:text-opacity-100"
          >
            <Icon name="playernext" size="22" />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center 
          text-white text-opacity-70 hover:text-opacity-100"
          >
            <Icon name="repeat" size="22" />
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2">
          {audio}
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-[0.68rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end text-white">
        <button className="w-8 h-8 flex items-center justify-center text-white">
          <Icon size={16} name="lyrics" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white">
          <Icon size={16} name="queue" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white">
          <Icon size={16} name="device" />
        </button>
        <button
          onClick={controls[state.muted ? "unmute" : "mute"]}
          className="w-8 h-8 flex items-center justify-center text-white"
        >
          <Icon size={16} name={volumeIcon} />
        </button>
        <div className="w-[5.813rem] max-w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state?.volume}
            onChange={(value) => {
              controls.volume(value);
              controls.unmute();
            }}
          />
        </div>

        <button className="w-8 h-8 flex items-center justify-center text-white">
          <Icon size={16} name="fullscreen" />
        </button>
      </div>
    </div>
  );
}

export default Player;
