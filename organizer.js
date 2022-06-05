import path, { dirname } from "path"
import { fileURLToPath } from "url"
import fs from "fs"

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const directoryPath = path.join(__dirname, "assets")
const listFolder = (folderPath) =>
    new Promise(async (reslove, reject) => {
        fs.readdir(folderPath, function (err, files) {
            if (err) {
                console.log(err)
            }
            files.forEach(async (file) => {
                if (file.includes(".")) {
                    console.log(`${folderPath}/${file}`)
                    let ext = file.split(".")[1]
                    if (!fs.existsSync(directoryPath + "/" + ext)) {
                        fs.mkdirSync(directoryPath + "/" + ext)
                    }
                    fs.rename(`${folderPath}/${file}`, `${directoryPath}/${ext}/${file}`, function (err) {
                        if (err) {
                            console.log(err)
                        }
                    })

                } else {
                    listFolder(`${folderPath}/${file}`)
                }
            })
        })
        await sleep(5000)
        reslove()
    })
await listFolder(directoryPath)