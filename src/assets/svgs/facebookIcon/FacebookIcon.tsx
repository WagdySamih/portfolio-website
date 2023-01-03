type Props = {
  color?: string;
};

const GitHubIcon: React.FC<Props> = ({ color = "#8892b0" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      // xmlns:svgjs="http://svgjs.com/svgjs"
      width="24"
      height="24"
      x="0"
      y="0"
      viewBox="0 0 24 24"
      // style="enable-background:new 0 0 512 512"
      // xml:space="preserve"
    >
      <g>
        <path
          d="m6.812 13.937h2.518v9.312c0 .414.335.75.75.75l4.007.001c.415 0 .75-.337.75-.75v-9.312h2.387c.378 0 .697-.282.744-.657l.498-4c.056-.446-.293-.843-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75v-3.577c0-.375-.277-.692-.648-.743-.314-.043-1.555-.166-3.094-.166-7.01 0-5.567 7.772-5.74 8.437h-2.519c-.414 0-.75.336-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518c.414 0 .75-.336.75-.75v-3.151c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474c-.414 0-.75.336-.75.75v9.311h-2.505v-9.312c0-.414-.336-.75-.75-.75h-2.519z"
          fill={color}
          data-original={color}
        ></path>
      </g>
    </svg>
  );
};
export default GitHubIcon;
