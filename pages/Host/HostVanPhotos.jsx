import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { currentVan } = useOutletContext()
    return (
        <section className="photo-section">

            <img src={currentVan.imageUrl} className="host-van-detail-image" />
        </section>
    )
}