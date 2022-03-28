import StringTag from "@/data-classes/tags/StringTag";
import NaturalPersonTag from "@/data-classes/tags/NaturalPersonTag";

const TAG_NAMES = {
    NAME: 'name',
    SEAT: 'seat',
    UID: 'uid',
    REPRESENTATIVE: 'representative'
}

export default class LegalPersonTag {
    name
    seat
    uid
    representative

    constructor({name, seat, uid, representative}) {
        this.name = new StringTag(name)
        this.seat = new StringTag(seat)
        this.uid = new StringTag(uid)
        this.representative = new NaturalPersonTag(representative)
    }

    toXml(tagName) {
        const tag = document.createElementNS(null, tagName)

        tag.appendChild(this.name.toXml(TAG_NAMES.NAME))
        tag.appendChild(this.seat.toXml(TAG_NAMES.SEAT))
        tag.appendChild(this.uid.toXml(TAG_NAMES.UID))
        tag.appendChild(this.representative.toXml(TAG_NAMES.REPRESENTATIVE))

        return tag
    }
}
