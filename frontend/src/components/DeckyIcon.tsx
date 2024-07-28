import { FC, SVGAttributes } from 'react';

const DeckyIcon: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 512 456" {...props}>
    <g>
      <path
        style={{ fill: 'none' }}
        d="M154.33,72.51v49.79c11.78-0.17,23.48,2,34.42,6.39c10.93,4.39,20.89,10.91,29.28,19.18
        c8.39,8.27,15.06,18.13,19.61,29c4.55,10.87,6.89,22.54,6.89,34.32c0,11.78-2.34,23.45-6.89,34.32
        c-4.55,10.87-11.21,20.73-19.61,29c-8.39,8.27-18.35,14.79-29.28,19.18c-10.94,4.39-22.63,6.56-34.42,6.39v49.77
        c36.78,0,72.05-14.61,98.05-40.62c26-26.01,40.61-61.28,40.61-98.05c0-36.78-14.61-72.05-40.61-98.05
        C226.38,87.12,191.11,72.51,154.33,72.51z"
      />

      <ellipse
        transform="matrix(0.982 -0.1891 0.1891 0.982 -37.1795 32.9988)"
        style={{ fill: 'none' }}
        cx="154.33"
        cy="211.33"
        rx="69.33"
        ry="69.33"
      />
      <path style={{ fill: 'none' }} d="M430,97h-52v187h52c7.18,0,13-5.82,13-13V110C443,102.82,437.18,97,430,97z" />
      <path
        style={{ fill: 'currentColor' }}
        d="M432,27h-54V0H0v361c0,52.47,42.53,95,95,95h188c52.47,0,95-42.53,95-95v-7h54c44.18,0,80-35.82,80-80V107
        C512,62.82,476.18,27,432,27z M85,211.33c0-38.29,31.04-69.33,69.33-69.33c38.29,0,69.33,31.04,69.33,69.33
        c0,38.29-31.04,69.33-69.33,69.33C116.04,280.67,85,249.62,85,211.33z M252.39,309.23c-26.01,26-61.28,40.62-98.05,40.62v-49.77
        c11.78,0.17,23.48-2,34.42-6.39c10.93-4.39,20.89-10.91,29.28-19.18c8.39-8.27,15.06-18.13,19.61-29
        c4.55-10.87,6.89-22.53,6.89-34.32c0-11.78-2.34-23.45-6.89-34.32c-4.55-10.87-11.21-20.73-19.61-29
        c-8.39-8.27-18.35-14.79-29.28-19.18c-10.94-4.39-22.63-6.56-34.42-6.39V72.51c36.78,0,72.05,14.61,98.05,40.61
        c26,26.01,40.61,61.28,40.61,98.05C293,247.96,278.39,283.23,252.39,309.23z M443,271c0,7.18-5.82,13-13,13h-52V97h52
        c7.18,0,13,5.82,13,13V271z"
      />
    </g>
  </svg>
);

export default DeckyIcon;
