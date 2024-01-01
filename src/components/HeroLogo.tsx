import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 5, yoyo: Infinity, ease: "easeInOut" };

const HeroLogo: React.FC = () => {
    return (
        <div className="col-span-4 mb-20">
            <motion.svg
                className="w-full h-full"
                fill="black"
                width="1354"
                height="165"
                viewBox="0 0 1354 165"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    fill="transparent"
                    strokeWidth="2"
                    stroke="black"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 0.2 }}
                    transition={transition}
                    d="M59.1743 110.673C75.6978 110.673 83.9595 103.023 83.9595 87.7236C83.9595 72.4242 74.2826 64.7744 54.9287 64.7744H36.5693V55.48C67.1683 54.3325 82.4678 45.5736 82.4678 29.2031C82.4678 16.9635 75.6595 10.8438 62.043 10.8438H12.9316V110.673H59.1743ZM0.883301 121V0.516602H62.8462C84.1125 0.516602 94.7456 10.1935 94.7456 29.5474C94.7456 42.7814 87.2489 52.4201 72.2554 58.4634C88.6258 62.5177 96.811 72.1564 96.811 87.3794C96.811 109.793 84.6862 121 60.4365 121H0.883301ZM137.546 103.329C152.004 107.46 164.358 109.525 174.609 109.525C205.743 109.525 221.311 92.1987 221.311 57.5454C221.311 26.717 205.82 11.3027 174.838 11.3027C164.129 11.3027 151.698 12.2207 137.546 14.0566V103.329ZM125.498 5.45068C141.486 2.1613 158.009 0.516602 175.068 0.516602C213.699 0.516602 233.015 19.6027 233.015 57.7749C233.015 99.925 213.584 121 174.724 121C165.085 121 152.692 119.088 137.546 115.263V164.604H125.498V5.45068ZM311.501 0.516602C344.471 0.516602 360.957 18.7612 360.957 55.2505C360.957 57.8514 360.88 60.5671 360.727 63.3975H269.274C269.274 94.9144 285.951 110.673 319.304 110.673C332.997 110.673 345.16 108.76 355.793 104.936V115.263C345.16 119.088 332.997 121 319.304 121C277.919 121 257.226 100.46 257.226 59.3813C257.226 20.1382 275.318 0.516602 311.501 0.516602ZM269.274 52.6113H349.367C348.908 24.6133 336.286 10.6143 311.501 10.6143C284.727 10.6143 270.651 24.6133 269.274 52.6113ZM390.791 121V0.516602H402.839L455.852 109.066L507.258 0.516602H519.306V121H508.405V21.9741L460.441 121H450.573L401.691 21.9741V121H390.791ZM629.462 121V11.188H586.088C570.177 11.188 562.221 17.9963 562.221 31.6128C562.221 45.3823 573.696 54.3708 596.645 58.5781V69.02L555.336 121H539.387L583.679 66.2661C561.188 60.9878 549.943 49.5132 549.943 31.8423C549.943 10.9585 562.106 0.516602 586.433 0.516602H641.511V121H629.462ZM745.471 0.516602V121H733.422V0.516602H745.471ZM810.876 121L794.008 92.7725C782.687 71.5827 770.218 60.9878 756.601 60.9878V53.7588C771.136 53.7588 781.195 44.8851 786.779 27.1377C792.44 9.3903 802.844 0.516602 817.99 0.516602H826.826V10.8438H817.761C808.734 10.8438 801.888 17.805 797.221 31.7275C792.555 45.5736 785.441 53.9883 775.878 56.9717C784.14 59.3431 794.582 70.5882 807.204 90.707L826.252 121H810.876ZM841.284 86.9204C841.284 62.9767 857.195 51.0049 889.018 51.0049C900.263 51.0049 912.273 51.7699 925.048 53.2998V38.4976C925.048 20.0617 913.459 10.8438 890.28 10.8438C877.888 10.8438 865.189 12.7562 852.185 16.5811V6.25391C865.189 2.42904 877.888 0.516602 890.28 0.516602C921.491 0.516602 937.097 12.9857 937.097 37.9238V121H929.753L926.999 109.066C911.929 117.022 897.318 121 883.166 121C855.244 121 841.284 109.64 841.284 86.9204ZM889.018 61.332C865.227 61.332 853.332 69.7467 853.332 86.5762C853.332 102.641 863.277 110.673 883.166 110.673C897.854 110.673 911.814 106.771 925.048 98.9688V63.627C912.273 62.097 900.263 61.332 889.018 61.332ZM998.486 110.673H1068.37V10.8438H1016.73C1016.73 58.1956 1010.65 91.472 998.486 110.673ZM955.571 164.604V110.673H976.684C995.349 110.673 1004.68 77.3965 1004.68 10.8438V0.516602H1080.41V110.673H1101.64V164.604H1089.59V121H967.504V164.604H955.571ZM1139.51 103.329C1153.97 107.46 1166.32 109.525 1176.57 109.525C1207.71 109.525 1223.27 92.1987 1223.27 57.5454C1223.27 26.717 1207.78 11.3027 1176.8 11.3027C1166.09 11.3027 1153.66 12.2207 1139.51 14.0566V103.329ZM1127.46 5.45068C1143.45 2.1613 1159.97 0.516602 1177.03 0.516602C1215.66 0.516602 1234.98 19.6027 1234.98 57.7749C1234.98 99.925 1215.55 121 1176.69 121C1167.05 121 1154.66 119.088 1139.51 115.263V164.604H1127.46V5.45068ZM1258.04 86.9204C1258.04 62.9767 1273.95 51.0049 1305.78 51.0049C1317.02 51.0049 1329.03 51.7699 1341.81 53.2998V38.4976C1341.81 20.0617 1330.22 10.8438 1307.04 10.8438C1294.65 10.8438 1281.95 12.7562 1268.94 16.5811V6.25391C1281.95 2.42904 1294.65 0.516602 1307.04 0.516602C1338.25 0.516602 1353.85 12.9857 1353.85 37.9238V121H1346.51L1343.76 109.066C1328.69 117.022 1314.08 121 1299.92 121C1272 121 1258.04 109.64 1258.04 86.9204ZM1305.78 61.332C1281.99 61.332 1270.09 69.7467 1270.09 86.5762C1270.09 102.641 1280.03 110.673 1299.92 110.673C1314.61 110.673 1328.57 106.771 1341.81 98.9688V63.627C1329.03 62.097 1317.02 61.332 1305.78 61.332Z"
                />
            </motion.svg>
        </div>
    );
};

export default HeroLogo;
