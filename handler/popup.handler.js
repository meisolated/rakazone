import { useState, useEffect } from "react"
import react from "react"
import { fetcher } from "../util/functions.js"
import Loading from "../components/Loading"
import useSWR from "swr"



export default class popupHandler extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            first: true,
            onClose: () => {
                this.setState({ show: !this.state.show })
            },
            fetcher: (...args) => fetcher(...args).then((res) => res.json())
        }
    }

    componentDidMount() {
        let first_pop = localStorage.getItem("pop_status")
        if (first_pop) {
            this.setState({ first: false })
        }
    }

    render() {
        return (
            <></>
        )
    }
}
