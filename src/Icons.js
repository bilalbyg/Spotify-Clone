const HomeIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      class="Svg-sc-1bi12j5-0 EQkJl home-active-icon"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"
      ></path>
    </svg>
  );
};

const SearchIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      class="Svg-sc-1bi12j5-0 EQkJl search-icon"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
      ></path>
    </svg>
  );
};

const LibraryIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      class="Svg-sc-1bi12j5-0 EQkJl collection-icon"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"
      ></path>
    </svg>
  );
};

const PlusIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      class="Svg-sc-1bi12j5-0 EQkJl"
    >
      <path
        fill="currentColor"
        d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"
      ></path>
    </svg>
  );
};

const LikeIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      class="Svg-sc-1bi12j5-0 EQkJl"
    >
      <path
        fill="currentColor"
        d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"
      ></path>
    </svg>
  );
};

const BackArrowIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      class="Svg-sc-1bi12j5-0 eENWnB IYDlXmBmmUKHveMzIPCF"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"
      ></path>
    </svg>
  );
};

const NextArrowIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      class="Svg-sc-1bi12j5-0 eENWnB IYDlXmBmmUKHveMzIPCF"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"
      ></path>
    </svg>
  );
};

const DownDirIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="currentColor" d="M3 6l5 5.794L13 6z" />
    </svg>
  );
};

const PlayIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      viewBox="0 0 24 24"
      class="Svg-sc-1bi12j5-0 EQkJl"
    >
      <path
        fill="currentColor"
        d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
      ></path>
    </svg>
  );
};

const Icon = ({ name, size }) => {
  const icons = {
    home: HomeIcon,
    search: SearchIcon,
    library: LibraryIcon,
    plus: PlusIcon,
    like: LikeIcon,
    back: BackArrowIcon,
    next: NextArrowIcon,
    downdir: DownDirIcon,
    play: PlayIcon
  };

  const Component = icons[name];
  return <Component size={size} />;
};

export { Icon };
