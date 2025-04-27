export default function PokeStat({ stat }){

    const percent = stat.base_stat / 255 * 100

    return (
        <>
            <div class="stat">
                <div>
                    <div style={{width:`${percent}%`}}></div>
                </div>
                <h3>{stat.stat.name}</h3>
            </div>
        </>
    )
}
