import Loading from "../../components/Loading/index.js"

export default function Text(params) {
    return (
        <>
            <div className="container-default">
                <div style={{ width: "50px", height: "50px" }}>
                    <Loading></Loading>
                </div>
            </div>
        </>
    )
}
