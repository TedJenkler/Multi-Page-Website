import LeafletItem from "../LeafletItem"

const Locations = ( {hamburger} ) => {
    return (
        <div className={hamburger === false ? "locations row" : "locations row blurry"}>
            <LeafletItem margin={"margin-right"} id={"right"} country="Canada" address1="Designo Central Office" address2="3886 Wellington Street" address3="Toronto, Ontario M9C 3J5" p="P : +1 253-863-8967" m="M : contact@designo.co" cords={["43.648233", "-79.375602"]} />
            <LeafletItem margin={"margin-left"} id={"left"} country="Australia" address1="Designo AU Office" address2="19 Balonne Street" address3="New South Wales 2443" p="P : (02) 6720 9092" m="M : contact@designo.au" cords={["-30.329530", "149.788190"]} />
            <LeafletItem margin={"margin-right"} id={"right"} country="United Kingdom" address1="Designo UK Office" address2="13  Colorado Way" address3="Rhyd-y-fro SA8 9GA" p="P : 078 3115 1400" m="M : contact@designo.uk" cords={["51.141530", "1.297640"]} />
        </div>
    )
}

export default Locations