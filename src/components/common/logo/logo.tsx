import clsx from 'clsx';

interface LogoProps {
  variant?: 'horizontal' | 'flat';
  className?: string;
}

const Logo = (props: LogoProps) => {
  const { variant = 'horizontal', className } = props;
  return (
    <>
      <div
        className={clsx(
          'logo',
          {
            [`logo-${variant}`]: variant,
          },
          className
        )}
      >
        <i className={clsx('logo-icon')}>
          <svg
            width="34"
            height="56"
            viewBox="0 0 144 234"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M93.5298 27.14H49.0598C36.9598 27.14 27.1098 36.99 27.1098 49.09V70.03L143.13 135.16V49.21C143.13 22.08 121.05 0 93.9198 0H49.2798C22.1398 0 0.0698242 22.08 0.0698242 49.21V84.44L129.91 156.57V184.02C129.91 203.86 113.77 220.01 93.9198 220.01H49.2798C29.4398 220.01 13.2898 203.87 13.2898 184.02V121.88L101.05 170.99V184.04C101.05 185.5 100.72 192.76 94.1298 192.76H49.6598C44.8498 192.76 40.9398 188.85 40.9398 184.04V153.34L27.7198 145.47V184.03C27.7198 196.13 37.5698 205.98 49.6698 205.98H94.1398C105.81 205.98 114.28 196.75 114.28 184.03V163.23L0.0698242 99.33V184.02C0.0698242 211.15 22.1498 233.23 49.2798 233.23H93.9198C121.06 233.23 143.13 211.15 143.13 184.02V148.79L13.2898 76.66V49.21C13.2898 29.37 29.4298 13.22 49.2798 13.22H93.9198C113.76 13.22 129.91 29.36 129.91 49.21V112.57L40.3398 62.29V49.09C40.3398 44.28 44.2498 40.37 49.0598 40.37H93.5298C98.3398 40.37 102.25 44.28 102.25 49.09V80.53L115.48 88.4V49.09C115.48 36.98 105.63 27.14 93.5298 27.14Z"
              fill="url(#paint0_linear_903_22616)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_903_22616"
                x1="135.115"
                y1="0.4964"
                x2="12.7616"
                y2="224.173"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DEC699" />
                <stop offset="1" stopColor="#B8A379" />
              </linearGradient>
            </defs>
          </svg>
        </i>
        <i className={clsx('logo-text')}>
          <svg
            width="185"
            height="25"
            viewBox="0 0 411 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.23 18.1794H32.04C31.33 13.5794 27.89 10.7895 22.25 10.7895C16.74 10.7895 13.69 12.9895 13.69 16.1695C13.69 20.1195 17.77 21.4894 28.08 23.6194C40.27 26.1494 44.41 32.1794 44.41 40.0794C44.41 50.1894 34.88 56.3495 23.08 56.3495C10.05 56.3495 0.52 49.2795 0 38.0095H12.12C12.77 43.0695 17.18 46.4395 23.92 46.4395C28.72 46.4395 32.28 44.0394 32.28 40.6094C32.28 36.3994 28.72 34.7094 19.32 32.9594C7.85 30.8194 1.62 26.0895 1.62 16.1695C1.62 6.63946 11.08 0.939453 23.01 0.939453C34.83 0.939453 43.64 8.12944 44.23 18.1794Z"
              fill="#1E1E20"
            />
            <path
              d="M50.71 2.22949H62.51V31.6595C62.51 40.0895 67.18 45.7295 74.89 45.7295C82.6 45.7295 87.27 40.0895 87.27 31.6595V2.22949H99.07V31.6595C99.07 46.6295 89.41 56.3595 74.89 56.3595C60.37 56.3595 50.71 46.6395 50.71 31.6595V2.22949Z"
              fill="#1E1E20"
            />
            <path
              d="M107.75 2.22949H128.04C141.78 2.22949 149.82 9.87947 149.82 21.5495C149.82 33.3495 141.78 40.9995 128.04 40.9995H119.55V55.0695H107.75V2.22949ZM127.52 30.5595C134.07 30.5595 138.02 27.4495 138.02 21.5495C138.02 15.7195 134.07 12.6695 127.52 12.6695H119.55V30.5595H127.52Z"
              fill="#1E1E20"
            />
            <path
              d="M156.17 2.22949H195.45V12.4695H167.97V23.2295H193.18V33.4695H167.97V44.8095H196.04V55.0495H156.18V2.22949H156.17Z"
              fill="#1E1E20"
            />
            <path
              d="M235.38 55.0595L225.14 38.3995H215.74V55.0595H203.94V2.22949H225.2C238.62 2.22949 246.46 9.35948 246.46 20.3095C246.46 27.5695 243.02 33.1395 236.8 36.0595L249.05 55.0495H235.38V55.0595ZM215.74 27.9695H224.69C230.91 27.9695 234.67 25.3095 234.67 20.3195C234.67 15.3295 230.91 12.6695 224.69 12.6695H215.74V27.9695Z"
              fill="#1E1E20"
            />
            <path
              d="M251.59 28.6199C251.59 12.6099 263.58 0.879883 279.85 0.879883C294.37 0.879883 304.09 9.62988 306.23 20.7799H294.3C293.07 15.7199 287.69 11.7099 280.1 11.7099C270.51 11.7099 263.38 18.7799 263.38 28.6299C263.38 38.4199 270.51 45.5499 280.1 45.5499C287.68 45.5499 293.91 40.5599 294.81 35.7599H306.74C305.12 46.3899 294.49 56.3699 279.84 56.3699C263.58 56.3599 251.59 44.6299 251.59 28.6199Z"
              fill="#1E1E20"
            />
            <path
              d="M343.31 44.8195H322.83L319.13 55.0595H306.94L327.42 2.22949H339.67L360.15 55.0595H346.99L343.31 44.8195ZM339.68 34.5795L333.07 16.1695L326.46 34.5795H339.68Z"
              fill="#1E1E20"
            />
            <path
              d="M396.92 55.0595L386.68 38.3995H377.28V55.0595H365.48V2.22949H386.74C400.16 2.22949 408 9.35948 408 20.3095C408 27.5695 404.56 33.1395 398.34 36.0595L410.59 55.0495H396.92V55.0595ZM377.28 27.9695H386.23C392.45 27.9695 396.21 25.3095 396.21 20.3195C396.21 15.3295 392.45 12.6695 386.23 12.6695H377.28V27.9695Z"
              fill="#1E1E20"
            />
          </svg>
          <svg
            width="160"
            height="14"
            viewBox="0 0 352 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.0200195 0.219727H5.48002L16.06 17.3897L26.64 0.219727H32.1V30.9097H25.25V14.0797L18.13 25.8697H13.99L6.87002 14.0797V30.9097H0.0200195V0.219727Z"
              fill="#1E1E20"
            />
            <path
              d="M90.2101 24.9597H78.3101L76.1601 30.9097H69.0801L80.9801 0.219727H88.1001L100 30.9097H92.3501L90.2101 24.9597ZM88.1001 19.0097L84.2601 8.30972L80.4201 19.0097H88.1001Z"
              fill="#1E1E20"
            />
            <path
              d="M155.25 30.9097L149.3 21.2297H143.84V30.9097H136.99V0.219727H149.34C157.14 0.219727 161.69 4.35974 161.69 10.7297C161.69 14.9497 159.69 18.1897 156.08 19.8797L163.2 30.9097H155.25ZM143.84 15.1697H149.04C152.66 15.1697 154.84 13.6297 154.84 10.7297C154.84 7.82974 152.66 6.28973 149.04 6.28973H143.84V15.1697Z"
              fill="#1E1E20"
            />
            <path
              d="M211.29 19.1997L207.11 24.0197V30.9097H200.26V0.219727H207.11V14.6797L219.39 0.219727H227.79L215.74 14.1197L228.43 30.9197H219.88L211.29 19.1997Z"
              fill="#1E1E20"
            />
            <path
              d="M265.26 0.219727H288.08V6.16974H272.11V12.4197H286.76V18.3697H272.11V24.9597H288.42V30.9097H265.26V0.219727Z"
              fill="#1E1E20"
            />
            <path
              d="M351.99 6.27972H342.01V30.9097H335.16V6.27972H325.18V0.219727H351.99V6.27972Z"
              fill="#1E1E20"
            />
          </svg>
        </i>
      </div>
      <style jsx>{`
        .logo {
          display: flex;
          gap: 12px;
        }
        .logo-horizontal {
          flex-direction: row;
        }
        .logo-flat {
          flex-direction: column;
        }
        .logo-icon {
          display: flex;
          align-items: center;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 9.27px;
        }
      `}</style>
    </>
  );
};

export default Logo;
