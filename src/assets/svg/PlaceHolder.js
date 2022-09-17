import * as React from "react"

const SvgPlaceHolder = (props) => (
  <svg
    clipRule="evenodd"
    fillRule="evenodd"
    height={125}
    strokeLinejoin="round"
    strokeMiterlimit={2}
    width={125}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M0 0h125v124.999H0z" fill="#e0e0e0" />
    <g fill="#c2c2c2">
      <path
        d="M23.944 58.095V47.917h3.892c.742 0 1.344.112 1.834.336.49.238.854.546 1.106.952.238.392.364.84.364 1.344 0 .42-.084.77-.238 1.064s-.378.532-.644.714-.574.308-.896.392v.098a2.378 2.378 0 0 1 1.862 1.176c.21.364.308.812.308 1.33s-.126.994-.378 1.414-.644.756-1.148.994c-.518.238-1.162.364-1.946.364zm1.834-1.54h1.988c.672 0 1.148-.126 1.456-.392.294-.252.434-.588.434-.98a1.526 1.526 0 0 0-.854-1.4c-.28-.14-.602-.21-.98-.21h-2.044zm0-4.312h1.834c.322 0 .602-.056.854-.182.252-.112.462-.28.602-.49.154-.224.224-.476.224-.784 0-.392-.14-.714-.406-.966-.28-.252-.7-.392-1.232-.392h-1.876zM35.166 58.249c-.49 0-.924-.084-1.302-.266-.392-.168-.7-.42-.924-.77-.224-.336-.336-.756-.336-1.26 0-.434.084-.784.252-1.064.154-.294.364-.518.644-.686s.588-.294.938-.378c.336-.084.7-.154 1.078-.196.434-.042.798-.084 1.078-.126s.49-.098.616-.182.182-.21.182-.378v-.028c0-.378-.098-.658-.322-.868s-.546-.308-.966-.308c-.434 0-.784.098-1.05.28-.252.196-.42.42-.518.686l-1.68-.238c.14-.462.35-.854.658-1.162.308-.322.686-.546 1.12-.714a4.41 4.41 0 0 1 1.456-.238c.378 0 .742.056 1.106.14s.7.224.994.42c.308.196.546.462.728.798.182.35.28.77.28 1.274v5.11h-1.736v-1.05h-.056c-.112.21-.266.406-.462.602a2.122 2.122 0 0 1-.742.434 2.923 2.923 0 0 1-1.036.168zm.462-1.316c.364 0 .686-.084.952-.224.252-.14.462-.336.602-.574.154-.238.224-.504.224-.784v-.896a1.004 1.004 0 0 1-.294.126c-.126.042-.28.084-.448.112s-.322.056-.49.07c-.168.028-.308.056-.42.07a3.7 3.7 0 0 0-.728.168c-.21.084-.378.21-.49.35a.863.863 0 0 0-.196.574c0 .322.126.574.364.742.252.182.56.266.924.266zM44.195 58.249c-.756 0-1.414-.168-1.96-.504s-.966-.798-1.26-1.386c-.294-.602-.434-1.274-.434-2.058 0-.77.14-1.456.448-2.044.294-.602.714-1.064 1.26-1.4s1.19-.504 1.932-.504c.63 0 1.176.126 1.652.35s.854.546 1.148.952c.28.42.448.896.49 1.442h-1.722a1.595 1.595 0 0 0-.504-.91c-.252-.252-.602-.378-1.036-.378-.364 0-.686.098-.966.294s-.504.49-.658.854-.224.812-.224 1.316c0 .518.07.966.224 1.344s.364.658.644.854c.28.21.602.308.98.308.266 0 .504-.056.714-.154s.392-.252.532-.434c.14-.196.238-.434.294-.7h1.722a3.092 3.092 0 0 1-.476 1.428c-.28.42-.658.742-1.134.98-.476.224-1.022.35-1.666.35zM50.316 55.7v-2.17h.28l2.758-3.065h2.1l-3.374 3.752h-.378zm-1.638 2.395V47.917h1.806v10.178zm4.788 0-2.478-3.472 1.204-1.274 3.43 4.746zM59.295 61.09c-.644 0-1.204-.083-1.666-.265-.462-.168-.826-.392-1.12-.686-.28-.294-.476-.602-.574-.952l1.61-.392c.07.14.182.28.322.42s.322.266.56.364.546.14.896.14c.518 0 .938-.112 1.274-.364.336-.238.504-.644.504-1.19v-1.442h-.098a2.292 2.292 0 0 1-.406.574 1.896 1.896 0 0 1-.7.49c-.28.126-.644.196-1.092.196-.574 0-1.106-.14-1.582-.406-.476-.28-.854-.7-1.134-1.246-.28-.56-.42-1.246-.42-2.086 0-.826.14-1.54.42-2.114.28-.588.658-1.022 1.134-1.316a2.875 2.875 0 0 1 1.596-.462c.448 0 .812.084 1.106.238.294.14.518.322.686.532.182.21.308.406.392.602h.112v-1.26h1.764v7.756c0 .644-.154 1.176-.462 1.596s-.742.742-1.274.952a5.114 5.114 0 0 1-1.848.322zm.014-4.521c.392 0 .714-.084.98-.28.266-.182.476-.448.616-.798s.21-.756.21-1.246-.07-.91-.21-1.26c-.14-.364-.336-.644-.616-.854-.266-.196-.588-.294-.98-.294s-.728.098-.994.308c-.28.21-.476.504-.616.868-.126.35-.196.77-.196 1.232s.07.868.196 1.218c.14.35.35.63.616.826.266.182.602.28.994.28zM64.508 58.095v-7.63h1.75v1.26h.07c.14-.434.378-.77.728-1.022.336-.238.728-.35 1.162-.35.098 0 .21 0 .336.014.126 0 .224.014.308.028v1.666a2.038 2.038 0 0 0-.364-.084 5.425 5.425 0 0 0-.476-.028c-.322 0-.616.07-.882.21a1.52 1.52 0 0 0-.602.588 1.589 1.589 0 0 0-.224.854v4.494zM72.811 58.249c-.742 0-1.386-.168-1.946-.504a3.233 3.233 0 0 1-1.26-1.372c-.308-.588-.448-1.274-.448-2.072 0-.784.14-1.47.448-2.072a3.233 3.233 0 0 1 1.26-1.372c.56-.336 1.204-.504 1.946-.504s1.386.168 1.932.504c.56.322.98.784 1.274 1.372.308.602.448 1.288.448 2.072 0 .798-.14 1.484-.448 2.072a3.179 3.179 0 0 1-1.274 1.372c-.546.336-1.19.504-1.932.504zm.014-1.442c.406 0 .742-.112 1.008-.336.28-.224.476-.532.616-.91.126-.378.196-.798.196-1.26s-.07-.896-.196-1.274c-.14-.378-.336-.672-.616-.896-.266-.238-.602-.35-1.008-.35-.42 0-.756.112-1.036.35-.28.224-.476.518-.616.896-.126.378-.196.812-.196 1.274s.07.882.196 1.26c.14.378.336.686.616.91s.616.336 1.036.336zM82.704 54.889v-4.424h1.792v7.63H82.76v-1.358h-.084a2.235 2.235 0 0 1-.854 1.05c-.392.266-.868.406-1.442.406-.504 0-.938-.112-1.33-.336-.378-.224-.672-.546-.896-.98-.21-.42-.322-.952-.322-1.554v-4.858h1.806v4.578c0 .49.126.868.392 1.148.266.294.616.434 1.05.434a1.7 1.7 0 0 0 .77-.196c.238-.126.448-.322.602-.574.168-.266.252-.588.252-.966zM87.771 53.615v4.48h-1.806v-7.63h1.722v1.288h.084c.182-.42.462-.77.854-1.022.378-.252.854-.378 1.428-.378.532 0 .98.112 1.372.35.406.224.7.546.924.98.21.42.322.938.322 1.554v4.858h-1.806v-4.578c0-.518-.126-.91-.392-1.204s-.63-.434-1.092-.434a1.7 1.7 0 0 0-.84.21c-.238.14-.434.336-.574.588a2.155 2.155 0 0 0-.196.938zM96.986 58.235a2.921 2.921 0 0 1-1.61-.462c-.462-.308-.84-.756-1.12-1.344-.266-.588-.406-1.302-.406-2.142 0-.854.14-1.568.42-2.156.28-.574.658-1.022 1.134-1.316A2.875 2.875 0 0 1 97 50.353c.448 0 .812.084 1.106.238.28.14.518.322.686.532s.294.406.392.602h.07v-3.808h1.806v10.178h-1.764V56.89h-.112a4.072 4.072 0 0 1-.406.588c-.182.21-.406.392-.7.532-.28.14-.644.224-1.092.224zm.504-1.484c.392 0 .714-.098.98-.308s.476-.504.616-.868c.14-.378.21-.798.21-1.302 0-.49-.07-.924-.21-1.288s-.336-.644-.616-.84c-.266-.21-.588-.308-.98-.308s-.728.098-.994.308c-.28.21-.476.504-.616.868-.126.364-.196.784-.196 1.26s.07.91.196 1.274c.14.378.35.672.616.882s.602.322.994.322zM43.214 63.917h1.848v10.178h-1.848zM46.829 74.095v-7.63h1.722v1.288h.084c.168-.434.42-.77.798-1.022.364-.252.798-.378 1.316-.378s.952.126 1.302.378c.364.252.616.588.756 1.022h.084c.168-.42.448-.756.854-1.008.406-.266.882-.392 1.442-.392.7 0 1.274.224 1.722.672.434.448.658 1.092.658 1.946v5.124H55.76V69.25c0-.476-.126-.826-.378-1.05a1.4 1.4 0 0 0-.924-.322c-.434 0-.77.126-1.008.406-.252.266-.378.616-.378 1.05v4.76h-1.764v-4.928c0-.392-.112-.7-.35-.938s-.546-.35-.924-.35c-.266 0-.504.056-.714.196-.21.126-.378.308-.504.546s-.182.518-.182.826v4.648zM61.197 74.249c-.49 0-.924-.084-1.302-.266-.392-.168-.7-.42-.924-.77-.224-.336-.336-.756-.336-1.26 0-.434.084-.784.252-1.064.154-.294.364-.518.644-.686s.588-.294.938-.378c.336-.084.7-.154 1.078-.196.434-.042.798-.084 1.078-.126s.49-.098.616-.182.182-.21.182-.378v-.028c0-.378-.098-.658-.322-.868s-.546-.308-.966-.308c-.434 0-.784.098-1.05.28-.252.196-.42.42-.518.686l-1.68-.238c.14-.462.35-.854.658-1.162.308-.322.686-.546 1.12-.714a4.41 4.41 0 0 1 1.456-.238c.378 0 .742.056 1.106.14s.7.224.994.42c.308.196.546.462.728.798.182.35.28.77.28 1.274v5.11h-1.736v-1.05h-.056c-.112.21-.266.406-.462.602a2.122 2.122 0 0 1-.742.434 2.923 2.923 0 0 1-1.036.168zm.462-1.316c.364 0 .686-.084.952-.224.252-.14.462-.336.602-.574.154-.238.224-.504.224-.784v-.896a1.004 1.004 0 0 1-.294.126c-.126.042-.28.084-.448.112s-.322.056-.49.07c-.168.028-.308.056-.42.07a3.7 3.7 0 0 0-.728.168c-.21.084-.378.21-.49.35a.863.863 0 0 0-.196.574c0 .322.126.574.364.742.252.182.56.266.924.266zM70.212 77.09c-.644 0-1.204-.083-1.666-.265-.462-.168-.826-.392-1.12-.686-.28-.294-.476-.602-.574-.952l1.61-.392c.07.14.182.28.322.42s.322.266.56.364.546.14.896.14c.518 0 .938-.112 1.274-.364.336-.238.504-.644.504-1.19v-1.442h-.098a2.292 2.292 0 0 1-.406.574 1.896 1.896 0 0 1-.7.49c-.28.126-.644.196-1.092.196-.574 0-1.106-.14-1.582-.406-.476-.28-.854-.7-1.134-1.246-.28-.56-.42-1.246-.42-2.086 0-.826.14-1.54.42-2.114.28-.588.658-1.022 1.134-1.316a2.875 2.875 0 0 1 1.596-.462c.448 0 .812.084 1.106.238.294.14.518.322.686.532.182.21.308.406.392.602h.112v-1.26h1.764v7.756c0 .644-.154 1.176-.462 1.596s-.742.742-1.274.952a5.114 5.114 0 0 1-1.848.322zm.014-4.521c.392 0 .714-.084.98-.28.266-.182.476-.448.616-.798s.21-.756.21-1.246-.07-.91-.21-1.26c-.14-.364-.336-.644-.616-.854-.266-.196-.588-.294-.98-.294s-.728.098-.994.308c-.28.21-.476.504-.616.868-.126.35-.196.77-.196 1.232s.07.868.196 1.218c.14.35.35.63.616.826.266.182.602.28.994.28zM78.813 74.249c-.77 0-1.428-.168-1.988-.49-.56-.308-.98-.77-1.274-1.358-.308-.588-.448-1.274-.448-2.086 0-.784.14-1.47.448-2.058a3.306 3.306 0 0 1 1.26-1.4c.532-.336 1.176-.504 1.904-.504.462 0 .91.084 1.33.238.42.14.798.378 1.12.686.322.322.574.728.756 1.204.182.49.28 1.064.28 1.736v.546h-6.258v-1.204h4.536c0-.35-.084-.658-.224-.924a1.701 1.701 0 0 0-.616-.644c-.252-.154-.56-.224-.896-.224-.378 0-.7.084-.98.266-.28.168-.49.406-.644.686a2 2 0 0 0-.238.952v1.05c0 .448.084.826.252 1.148.154.308.378.56.672.728s.63.252 1.022.252c.266 0 .504-.042.714-.112.21-.084.392-.196.56-.336.154-.154.266-.322.35-.546l1.68.196a2.8 2.8 0 0 1-.602 1.162 3.16 3.16 0 0 1-1.148.756c-.448.182-.98.28-1.568.28z"
        fillRule="nonzero"
      />
      <path d="M41.72 40.305 1.414 0H0v1.415l40.305 40.304zM41.72 84.695 1.414 125H0v-1.415L40.305 83.28zM83.28 40.305 123.586 0H125v1.415L84.695 41.719zM83.28 84.695 123.586 125H125v-1.415L84.695 83.28z" />
    </g>
  </svg>
)

export default SvgPlaceHolder
