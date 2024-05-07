const blob = document.getElementById("blob")

const reach = 25

document.addEventListener("mousemove", (event) => {
    const x = event.clientX
    const y = event.clientY

    const width = window.innerWidth
    const height = window.innerHeight

    const xReach = Math.round((x / width) * reach - reach / 2)
    const yReach = Math.round((y / height) * reach - reach / 2)

    console.log(`${xReach}px ${yReach}px 0 22px #312272, 0 0 0 44px #241660`)

    blob.style.boxShadow = `${-xReach}px ${-yReach}px 0 22px #312272, ${
        -xReach * 2
    }px ${-yReach * 2}px 0 44px #241660`
})
