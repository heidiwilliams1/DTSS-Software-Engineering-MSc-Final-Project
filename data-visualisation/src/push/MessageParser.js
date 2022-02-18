class MessageParser {
  keys = {
    t: {
      key: "type",
      sub: {
        sc: "scoreboard",
        o: "outcome",
        e: "event",
        m: "market",
      },
    },
    i: { key: "id" },
    s: { key: "status" },
    d: { key: "displayable" },
    m: { key: "marketsCount" },
    n: { key: "title" },
    o: { key: "disporder" },
    b: { key: "bir_index" },
    ib: { key: "is_bir" },
    dst: { key: "destination" },
    lev: { key: "linked_event" },
    r: { key: "result" },
    wr: { key: "winDeadHeatReduction" },
    pr: { key: "placeDeadHeatReduction" },
    p: { key: "place" },
    hcapm: { key: "handicapMakeup" },
    hcapv: { key: "handicapValue" },
    // Scoreboards
    sct: { key: "scoreboard_type" },
    pl: { key: "payload" },
    cr: { key: "clockRunning" },
    et: { key: "extraTime" },
    dht: { key: "halfTimeDuration" },
    det: { key: "extraTimeDuration" },
    se: { key: "seconds" },
    gl: { key: "score" },
    hm: { key: "home" },
    aw: { key: "away" },
    plr: { key: "player" },
    mn: { key: "minute" },
    mis: { key: "missed" },
    gls: { key: "scorers" },
    pens: { key: "penalties" },
    pgl: { key: "penScore" },
    blk: { key: "blank" },
    agg: { key: "aggregate" },
    crd: { key: "cards" },
    vn: { key: "venue" },
    lc: { key: "location" },
    wh: { key: "weather" },
    cm: { key: "commentary" },
    st: { key: "stats" },
    crn: { key: "corner" },
    son: { key: "shotOn" },
    sof: { key: "shotOff" },
    per: { key: "percent" },
    psn: { key: "possession" },
    act: { key: "action" },
    alt: { key: "alert" },
    zn: { key: "zone" },
    ts: { key: "timerSeconds" },
    sht: { key: "halfTimeScore" },
    sft: { key: "fullTimeScore" },
    att: { key: "attack" },
    dna: { key: "dangerousAttack" },
  };

  parseMessage(data) {
    const message = {};

    Object.keys(data).forEach((key) => {
      if (data[key] && typeof data[key] === "object") {
        console.log(key);
        console.log(data[key]);
        console.log(typeof data[key]);
        message[this.keys[key].key] = this.parseMessage(data[key]);
      } else {
        if (this.keys[key] && !this.keys[key].sub) {
          message[this.keys[key].key] = data[key];
        } else if (this.keys[key] && this.keys[key].sub) {
          if (this.keys[key].sub[data[key]]) {
            message[this.keys[key].key] = this.keys[key].sub[data[key]];
          } else {
            message[this.keys[key].key] = data[key];
          }
        }
      }
    });

    return message;
  }
}

export default MessageParser;
