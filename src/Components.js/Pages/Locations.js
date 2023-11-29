import LeafletItem from "../LeafletItem"

const Locations = ( {hamburger} ) => {
    return (
        <div className={hamburger === false ? "row" : "row blurry"}>
            <LeafletItem country="Canada" address1="Designo Central Office" address2="3886 Wellington Street" address3="Toronto, Ontario M9C 3J5" p="P : +1 253-863-8967" m="M : contact@designo.co" />
            <LeafletItem country="Australia" address1="Designo AU Office" address2="19 Balonne Street" address3="New South Wales 2443" p="P : (02) 6720 9092" m="M : contact@designo.au" />
            <LeafletItem country="United Kingdom" address1="Designo UK Office" address2="13  Colorado Way" address3="Rhyd-y-fro SA8 9GA" p="P : 078 3115 1400" m="M : contact@designo.uk" />
        </div>
    )
}

export default Locations