import { animate } from "framer-motion";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="socialContainer">
        <div className="socialWrapper">
          <motion.hr
            initial={{ y: -500, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1, delay: 0.5 },
            }}
          />
          <motion.div
            className="social"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.a
              href="https://www.facebook.com/bhuwan.thapa.15/"
              target="_blank"
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img src="/facebook.png" alt="Facebook" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/bhuwan__thapa/"
              target="_blank"
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img src="/instagram.png" alt="Instagram" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/bhuwan-thapa-2551361a3/"
              target="_blank"
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img src="/linkedin.png" alt="YouTube" />
            </motion.a>
            <motion.a
              href="https://github.com/B1Th"
              target="_blank"
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="/github.png"
                style={{ backgroundColor: "lightGray", padding: "2px" }}
                alt="Dribbble"
              />
            </motion.a>
          </motion.div>
          <motion.hr
            initial={{ y: 500, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1, delay: 0.5 },
            }}
          />
        </div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Designer Content Creator
      </motion.div>
      <div className="mainContainer">
        <div className="containerWrapper">
          <div className="textWrapper">
            <div
              className="textContainer"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <motion.h2
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 1 } }}
              >
                BHUWAN THAPA
              </motion.h2>
              <svg
                width="100%"
                height="25%"
                max-width="618"
                viewBox="0 0 618 165"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M533.718 161V162.5H535.218H541.77H543.27V161V139.958H552.068L562.732 161.662L563.144 162.5H564.078H571.8H574.245L573.137 160.32L561.99 138.391C565.322 137.123 567.925 135.179 569.693 132.507C571.735 129.496 572.754 126.11 572.754 122.39C572.754 119.198 572.052 116.25 570.629 113.574C569.172 110.834 566.935 108.704 563.99 107.175C561.004 105.625 557.26 104.9 552.846 104.9H535.218H533.718V106.4V161ZM560.507 115.87L560.522 115.885L560.536 115.899C562.113 117.433 562.968 119.562 562.968 122.468C562.968 125.312 562.118 127.524 560.494 129.236C558.97 130.842 556.386 131.81 552.378 131.81H543.27V113.438H552.3C556.449 113.438 559.049 114.371 560.507 115.87Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 4.4 },
                  }}
                />
                <motion.path
                  d="M489.691 161V162.5H491.191H524.965H526.465V161V155.618V154.118H524.965H499.243V137.618H522.625H524.125V136.118V130.814V129.314H522.625H499.243V113.282H524.965H526.465V111.782V106.4V104.9H524.965H491.191H489.691V106.4V161Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 4.2 },
                  }}
                />
                <motion.path
                  d="M435.914 161V162.5H437.414H443.966H445.466V161V122.207L471.81 161.831L472.256 162.5H473.06H479.612H481.112V161V106.4V104.9H479.612H473.06H471.56V106.4V145.193L445.215 105.57L444.77 104.9H443.966H437.414H435.914V106.4V161Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 4 },
                  }}
                />
                <motion.path
                  d="M387.651 159.7L387.657 159.704L387.663 159.708C391.776 162.209 396.525 163.436 401.858 163.436C406.754 163.436 410.847 162.551 414.018 160.648C415.963 159.481 417.708 158.008 419.254 156.24L419.549 161.091L419.635 162.5H421.046H427.052H428.552V161V131.828V130.328H427.052H404.588H403.088V131.828V136.976V138.476H404.588H418.699C418.128 143.395 416.577 147.211 414.143 150.031C411.542 152.994 407.618 154.586 402.092 154.586C398.542 154.586 395.497 153.763 392.906 152.163C390.305 150.506 388.251 148.156 386.75 145.058C385.259 141.979 384.482 138.235 384.482 133.778C384.482 129.325 385.257 125.584 386.746 122.506C388.292 119.418 390.415 117.096 393.111 115.488L393.119 115.483L393.127 115.478C395.821 113.824 399.025 112.97 402.794 112.97C406.835 112.97 409.991 113.88 412.377 115.578L412.377 115.578L412.388 115.586C414.836 117.295 416.362 119.573 417.008 122.481L417.269 123.656H418.472H426.038H427.923L427.5 121.82C426.228 116.287 423.381 111.885 418.964 108.696C414.599 105.508 409.175 103.964 402.794 103.964C397.159 103.964 392.179 105.212 387.907 107.764L387.907 107.764L387.9 107.769C383.7 110.31 380.443 113.85 378.137 118.352L378.134 118.359L378.131 118.365C375.879 122.87 374.774 128.02 374.774 133.778C374.774 139.536 375.879 144.686 378.131 149.191L378.134 149.197C380.385 153.644 383.559 157.157 387.651 159.7Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 3.8 },
                  }}
                />
                <motion.path
                  d="M358.751 161V162.5H360.251H366.803H368.303V161V106.4V104.9H366.803H360.251H358.751V106.4V161Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 3.6 },
                  }}
                />
                <motion.path
                  d="M312.818 143.12H311.318V144.62C311.318 148.296 312.184 151.593 313.961 154.458C315.733 157.317 318.243 159.528 321.438 161.098C324.647 162.675 328.366 163.436 332.552 163.436C336.825 163.436 340.493 162.68 343.475 161.076C346.431 159.513 348.708 157.463 350.223 154.899L350.227 154.893L350.231 154.886C351.709 152.328 352.46 149.6 352.46 146.726C352.46 143.478 351.828 140.669 350.457 138.396C349.178 136.192 347.381 134.406 345.101 133.038C342.927 131.733 340.497 130.601 337.818 129.637L337.801 129.631L337.784 129.625C334.668 128.586 331.913 127.677 329.521 126.896C327.269 126.112 325.607 125.166 324.454 124.106C323.536 123.219 322.976 121.868 322.976 119.816C322.976 117.444 323.759 115.736 325.236 114.501C326.834 113.209 328.91 112.533 331.589 112.58L331.603 112.58H331.616C333.819 112.58 335.508 113.012 336.772 113.77L336.781 113.776L336.791 113.781C338.181 114.588 339.163 115.609 339.799 116.839L339.804 116.849L339.81 116.858C340.484 118.118 340.802 119.358 340.802 120.596V122.096H342.302H349.166H350.693L350.666 120.569C350.609 117.407 349.787 114.537 348.176 112.001C346.615 109.461 344.397 107.487 341.574 106.075C338.775 104.648 335.517 103.964 331.85 103.964C328.133 103.964 324.828 104.647 321.98 106.07C319.197 107.434 317.003 109.387 315.443 111.927C313.874 114.43 313.135 117.289 313.19 120.453C313.192 124.242 314.307 127.458 316.633 129.963L316.639 129.969L316.645 129.976C318.901 132.348 322.269 134.244 326.6 135.741C328.851 136.526 331 137.234 333.047 137.864L333.047 137.864L333.057 137.867C335.062 138.468 336.787 139.161 338.242 139.938L338.251 139.942L338.26 139.947C339.676 140.678 340.754 141.614 341.536 142.744L341.544 142.755L341.552 142.766C342.248 143.733 342.674 145.134 342.674 147.116C342.674 149.327 341.853 151.127 340.146 152.615C338.478 154.069 336.017 154.898 332.552 154.898C329.935 154.898 327.836 154.415 326.188 153.53C324.545 152.567 323.322 151.332 322.478 149.824C321.615 148.233 321.182 146.506 321.182 144.62V143.12H319.682H312.818Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 3.4 },
                  }}
                />
                <motion.path
                  d="M269.63 161V162.5H271.13H304.904H306.404V161V155.618V154.118H304.904H279.182V137.618H302.564H304.064V136.118V130.814V129.314H302.564H279.182V113.282H304.904H306.404V111.782V106.4V104.9H304.904H271.13H269.63V106.4V161Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 3.2 },
                  }}
                />
                <motion.path
                  d="M215.32 161V162.5H216.82H233.59C243.435 162.5 250.985 160.025 255.901 154.771C260.798 149.54 263.17 142.509 263.17 133.856C263.17 125.057 260.804 117.946 255.904 112.71C250.989 107.402 243.437 104.9 233.59 104.9H216.82H215.32V106.4V161ZM245.33 115.817L245.33 115.817L245.34 115.822C248.224 117.43 250.25 119.696 251.469 122.65C252.728 125.7 253.384 129.422 253.384 133.856C253.384 138.179 252.73 141.849 251.471 144.902C250.254 147.801 248.231 150.043 245.343 151.654C242.527 153.201 238.597 154.04 233.434 154.04H224.872V113.36H233.434C238.594 113.36 242.519 114.224 245.33 115.817Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 3 },
                  }}
                />
                <motion.path
                  d="M176.548 161V162.5H178.048H184.6H186.1V161V106.4V104.9H184.6H178.048H176.548V106.4V161Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 2.8 },
                  }}
                />
                <motion.path
                  d="M135.706 161.094L135.72 161.101L135.734 161.107C139.023 162.668 142.651 163.436 146.595 163.436C150.587 163.436 154.242 162.669 157.534 161.107L157.543 161.103L157.553 161.098C160.901 159.453 163.559 156.926 165.519 153.566C167.51 150.151 168.453 145.891 168.453 140.876V106.4V104.9H166.953H160.401H158.901V106.4V140.954C158.901 146.064 157.694 149.427 155.619 151.415C153.454 153.49 150.55 154.586 146.751 154.586C142.953 154.586 140.015 153.49 137.794 151.404C135.674 149.415 134.445 146.057 134.445 140.954V106.4V104.9H132.945H126.393H124.893V106.4V140.876C124.893 145.891 125.835 150.151 127.827 153.566C129.783 156.919 132.41 159.446 135.706 161.094Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 2.6 },
                  }}
                />
                <motion.path
                  d="M54.6586 161.25L54.6734 161.257L54.6883 161.264C57.7822 162.727 61.31 163.436 65.2354 163.436C69.049 163.436 72.5525 162.782 75.7235 161.446L75.7337 161.442L75.7439 161.438C78.5348 160.214 81.1954 158.324 83.7326 155.812L89.9091 162.055L90.3493 162.5H90.9754H99.2434H102.848L100.308 159.943L89.4359 148.999C91.3308 146.372 93.2937 143.23 95.3258 139.582C95.3265 139.58 95.3271 139.579 95.3278 139.578L98.7558 133.501L100.018 131.264H97.4494H90.5074H89.6389L89.2065 132.017L86.7897 136.227C86.7895 136.228 86.7892 136.228 86.7889 136.228C85.4273 138.591 84.1487 140.68 82.953 142.499L67.0152 126.417C65.2521 124.551 63.9585 122.907 63.0993 121.478C62.3391 120.131 61.9774 118.777 61.9774 117.398C61.9774 115.852 62.4823 114.667 63.4662 113.722C64.411 112.815 65.8148 112.268 67.8874 112.268C69.4721 112.268 70.8237 112.751 72.0053 113.721L72.0152 113.729L72.0253 113.737C73.0848 114.578 73.6858 115.849 73.6418 117.833L73.6077 119.366H75.1414H81.6154H83.0516L83.114 117.931C83.2297 115.27 82.649 112.837 81.3353 110.688C80.0382 108.565 78.2128 106.924 75.9034 105.767C73.5732 104.547 70.8854 103.964 67.8874 103.964C63.3031 103.964 59.4987 105.185 56.6563 107.79C53.8844 110.326 52.5034 113.596 52.5034 117.476C52.5034 119.702 52.9327 121.807 53.801 123.775L53.8044 123.783L53.8078 123.791C54.4461 125.195 55.3643 126.624 56.5392 128.08C53.123 129.739 50.377 131.901 48.3574 134.594L48.3548 134.597C46.0226 137.726 44.8594 141.319 44.8594 145.322C44.8594 148.941 45.6973 152.163 47.4274 154.931L47.4371 154.947L47.4472 154.962C49.2148 157.642 51.6325 159.737 54.6586 161.25ZM57.366 152.025C55.3929 150.186 54.4114 147.91 54.4114 145.088C54.4114 142.652 55.1145 140.564 56.5079 138.762C57.8195 137.126 59.8215 135.675 62.6142 134.458L77.4294 149.483C75.6655 151.276 73.9073 152.569 72.162 153.403C70.148 154.339 67.8738 154.82 65.3134 154.82C61.928 154.82 59.3272 153.852 57.366 152.025Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 2.4 },
                  }}
                />
                <motion.path
                  d="M574.508 59V60.5H576.008H582.56H584.06V59V37.958H592.858L603.522 59.6615L603.934 60.5H604.868H612.59H615.035L613.928 58.3203L602.781 36.3906C606.112 35.1229 608.715 33.1787 610.483 30.5068C612.525 27.4964 613.544 24.1096 613.544 20.39C613.544 17.1982 612.842 14.2497 611.419 11.5736C609.962 8.83445 607.725 6.70403 604.78 5.17475C601.794 3.62455 598.05 2.89999 593.636 2.89999H576.008H574.508V4.39999V59ZM601.297 13.87L601.312 13.8848L601.326 13.8991C602.903 15.433 603.758 17.5615 603.758 20.468C603.758 23.3117 602.908 25.5244 601.284 27.2356C599.76 28.8422 597.176 29.81 593.168 29.81H584.06V11.438H593.09C597.239 11.438 599.839 12.3709 601.297 13.87Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 2.2 },
                  }}
                />
                <motion.path
                  d="M530.481 59V60.5H531.981H565.755H567.255V59V53.618V52.118H565.755H540.033V35.618H563.415H564.915V34.118V28.814V27.314H563.415H540.033V11.282H565.755H567.255V9.782V4.39999V2.89999H565.755H531.981H530.481V4.39999V59Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 2 },
                  }}
                />
                <motion.path
                  d="M485.311 59V60.5H486.811H493.363H494.863V59V37.724H504.751C509.216 37.724 513.006 36.9999 516.04 35.4546L516.05 35.4495L516.06 35.4443C519.038 33.8708 521.3 31.7502 522.761 29.0623C524.191 26.4313 524.893 23.5034 524.893 20.312C524.893 17.0677 524.164 14.1087 522.677 11.4727C521.213 8.7844 518.946 6.6896 515.962 5.16944C512.931 3.62519 509.167 2.89999 504.751 2.89999H486.811H485.311V4.39999V59ZM512.802 13.7136L512.816 13.7288L512.831 13.7435C514.343 15.213 515.185 17.3318 515.185 20.312C515.185 23.2305 514.348 25.3638 512.816 26.8953C511.42 28.2921 508.825 29.186 504.595 29.186H494.863V11.36H504.595C508.816 11.36 511.404 12.2761 512.802 13.7136Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 1.8 },
                  }}
                />
                <motion.path
                  d="M435.562 57.7137L435.572 57.7196L435.582 57.7253C439.897 60.2147 444.868 61.436 450.449 61.436C456.078 61.436 461.055 60.2161 465.324 57.7211L465.329 57.718C469.631 55.1808 472.971 51.6441 475.333 47.1386C477.699 42.6284 478.859 37.4687 478.859 31.7C478.859 25.9331 477.699 20.7972 475.332 16.3358C472.97 11.8333 469.632 8.29846 465.333 5.76207C461.062 3.21175 456.082 1.96399 450.449 1.96399C444.863 1.96399 439.886 3.21391 435.569 5.75994L435.569 5.75992L435.562 5.76428C431.316 8.30091 427.983 11.8329 425.571 16.3268L425.571 16.3268L425.568 16.3327C423.199 20.7948 422.039 25.9318 422.039 31.7C422.039 37.4687 423.2 42.6284 425.565 47.1386L425.568 47.1449L425.571 47.1512C427.983 51.6451 431.316 55.1771 435.562 57.7137ZM466.74 43.1109L466.735 43.1192C465.195 46.2001 463.025 48.5533 460.217 50.2198C457.464 51.8331 454.224 52.664 450.449 52.664C446.679 52.664 443.412 51.8352 440.603 50.2199C437.85 48.5552 435.677 46.2015 434.083 43.1149C432.546 39.9873 431.747 36.1987 431.747 31.7C431.747 27.1984 432.547 23.4386 434.081 20.3671C435.676 17.2771 437.849 14.9506 440.6 13.338L440.6 13.338L440.606 13.3341C443.415 11.6677 446.681 10.814 450.449 10.814C454.218 10.814 457.453 11.6679 460.204 13.3283L460.217 13.3361L460.23 13.3436C463.03 14.957 465.196 17.2799 466.735 20.3588L466.74 20.3671L466.744 20.3754C468.326 23.4443 469.151 27.2006 469.151 31.7C469.151 36.1984 468.327 39.985 466.74 43.1109Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 1.6 },
                  }}
                />
                <motion.path
                  d="M388.268 59V60.5H389.768H421.748H423.248V59V53.774V52.274H421.748H397.82V4.39999V2.89999H396.32H389.768H388.268V4.39999V59Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 1.4 },
                  }}
                />
                <motion.path
                  d="M344.241 59V60.5H345.741H379.515H381.015V59V53.618V52.118H379.515H353.793V35.618H377.175H378.675V34.118V28.814V27.314H377.175H353.793V11.282H379.515H381.015V9.782V4.39999V2.89999H379.515H345.741H344.241V4.39999V59Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 1.2 },
                  }}
                />
                <motion.path
                  d="M308.693 59.5276L309.058 60.5H310.097H317.741H318.78L319.145 59.5276L339.659 4.92756L340.421 2.89999H338.255H331.313H330.264L329.904 3.88571L313.926 47.6656L298.092 3.88979L297.734 2.89999H296.681H289.583H287.417L288.179 4.92756L308.693 59.5276Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 1 },
                  }}
                />
                <motion.path
                  d="M248.112 59V60.5H249.612H283.386H284.886V59V53.618V52.118H283.386H257.664V35.618H281.046H282.546V34.118V28.814V27.314H281.046H257.664V11.282H283.386H284.886V9.782V4.39999V2.89999H283.386H249.612H248.112V4.39999V59Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 0.8 },
                  }}
                />
                <motion.path
                  d="M193.801 59V60.5H195.301H212.071C221.916 60.5 229.467 58.0254 234.382 52.7711C239.279 47.5401 241.651 40.5091 241.651 31.856C241.651 23.0573 239.285 15.9457 234.385 10.71C229.47 5.40202 221.919 2.89999 212.071 2.89999H195.301H193.801V4.39999V59ZM223.812 13.817L223.812 13.8171L223.821 13.8222C226.705 15.4298 228.731 17.6955 229.951 20.6502C231.209 23.7003 231.865 27.4217 231.865 31.856C231.865 36.1793 231.212 39.8488 229.952 42.9018C228.736 45.8005 226.712 48.0433 223.824 49.6538C221.008 51.2014 217.079 52.04 211.915 52.04H203.353V11.36H211.915C217.075 11.36 221 12.2237 223.812 13.817Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 0.6 },
                  }}
                />
                <motion.path
                  d="M126.237 59V60.5H127.737H147.549C151.511 60.5 154.974 59.8221 157.881 58.3969L157.892 58.3917L157.902 58.3864C160.768 56.9255 162.994 54.9513 164.51 52.4441L164.514 52.4376L164.518 52.4311C166.012 49.9032 166.755 47.116 166.755 44.102C166.755 41.6419 166.21 39.3505 165.107 37.2545C164.068 35.1821 162.62 33.4454 160.773 32.06C160.052 31.5191 159.298 31.052 158.513 30.6594C159.872 29.8562 161.108 28.8539 162.216 27.6549C164.465 25.2805 165.507 22.094 165.507 18.284C165.507 15.4352 164.82 12.8273 163.425 10.4992C162.006 8.07822 159.867 6.22667 157.095 4.922C154.33 3.54383 150.914 2.89999 146.925 2.89999H127.737H126.237V4.39999V59ZM153.479 13.463L153.486 13.4701L153.494 13.4771C155.012 14.826 155.799 16.6103 155.799 18.986C155.799 21.5412 154.996 23.3895 153.503 24.721C151.997 26.0136 149.721 26.768 146.457 26.768H135.789V11.36H146.223C149.722 11.36 152.045 12.1523 153.479 13.463ZM154.359 37.4292L154.367 37.4361L154.375 37.4428C156.139 38.9488 157.047 40.9581 157.047 43.634C157.047 46.3924 156.17 48.3922 154.527 49.828C152.863 51.2323 150.374 52.04 146.847 52.04H135.789V34.994H146.691C150.072 34.994 152.571 35.8592 154.359 37.4292Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 0.4 },
                  }}
                />
                <motion.path
                  d="M82.2095 59V60.5H83.7095H117.484H118.984V59V53.618V52.118H117.484H91.7615V35.618H115.144H116.644V34.118V28.814V27.314H115.144H91.7615V11.282H117.484H118.984V9.782V4.39999V2.89999H117.484H83.7095H82.2095V4.39999V59Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    transition: { duration: 2, delay: 0.2 },
                  }}
                />
                <motion.path
                  d="M18.0846 59.4743L18.3903 60.5902L19.5473 60.5779L26.8793 60.4999L27.9874 60.4881L28.3017 59.4255L40.1843 19.261L51.7863 59.4164L52.0994 60.5H53.2274H60.7154H61.8531L62.1598 59.4044L77.4478 4.80444L77.9811 2.89999H76.0034H68.9834H67.8174L67.5297 4.02993L56.9859 45.447L45.4686 3.9984L45.1634 2.89999H44.0234H36.7694H35.6384L35.3273 3.98728L23.4476 45.4972L13.0301 4.03448L12.7451 2.89999H11.5754H4.55536H2.58927L3.10864 4.79624L18.0846 59.4743Z"
                  stroke="white"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, transition: { duration: 2 } }}
                />
              </svg>

              <div className="buttons">
                <motion.button whileTap={{ scale: 1.1 }}>
                  <a href="#Projects">See My Works</a>
                </motion.button>
                <motion.button whileTap={{ scale: 1.1 }}>
                  <a href="#About">About Me</a>
                </motion.button>
              </div>
              <motion.img
                src="/scroll.png"
                alt="Scroll down"
                variants={textVariants}
                animate="scrollButton"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
