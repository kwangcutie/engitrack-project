var bn = Object.defineProperty;
var st = (u) => {
  throw TypeError(u);
};
var pn = (u, e, t) => e in u ? bn(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[e] = t;
var eu = (u, e, t) => pn(u, typeof e != "symbol" ? e + "" : e, t), lt = (u, e, t) => e.has(u) || st("Cannot " + t);
var j = (u, e, t) => (lt(u, e, "read from private field"), t ? t.call(u) : e.get(u)), a0 = (u, e, t) => e.has(u) ? st("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(u) : e.set(u, t), s0 = (u, e, t, r) => (lt(u, e, "write to private field"), r ? r.call(u, t) : e.set(u, t), t);
const _n = "5";
var Gt;
typeof window < "u" && ((Gt = window.__svelte ?? (window.__svelte = {})).v ?? (Gt.v = /* @__PURE__ */ new Set())).add(_n);
let Ku = !1, xn = !1;
function mn() {
  Ku = !0;
}
mn();
const gn = 1, kn = 2, vn = 16, yn = 2, En = 8, Dn = 1, Cn = 2, I0 = "[", M0 = "[!", B0 = "]", Zu = {}, Z = Symbol(), An = "http://www.w3.org/1999/xhtml", ft = !1;
function Fn(u) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var R0 = Array.isArray, wn = Array.prototype.indexOf, z0 = Array.from, Re = Object.keys, ze = Object.defineProperty, zu = Object.getOwnPropertyDescriptor, Wt = Object.getOwnPropertyDescriptors, Sn = Object.prototype, $n = Array.prototype, L0 = Object.getPrototypeOf, dt = Object.isExtensible;
function Tn(u) {
  return u();
}
function Le(u) {
  for (var e = 0; e < u.length; e++)
    u[e]();
}
const ru = 2, Jt = 4, Ye = 8, q0 = 16, yu = 32, qu = 64, qe = 128, J = 256, Pe = 512, N = 1024, du = 2048, Iu = 4096, ku = 8192, Ke = 16384, In = 32768, P0 = 65536, Mn = 1 << 17, Bn = 1 << 19, Yt = 1 << 20, y0 = 1 << 21, Vu = Symbol("$state"), Kt = Symbol("legacy props"), Rn = Symbol("");
function zn(u) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ln() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function qn(u) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Pn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function On() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Nn(u) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function jn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Un() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Qe(u) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let A = !1;
function gu(u) {
  A = u;
}
let F;
function nu(u) {
  if (u === null)
    throw Qe(), Zu;
  return F = u;
}
function Wu() {
  return nu(
    /** @type {TemplateNode} */
    /* @__PURE__ */ bu(F)
  );
}
function U(u) {
  if (A) {
    if (/* @__PURE__ */ bu(F) !== null)
      throw Qe(), Zu;
    F = u;
  }
}
function Zn(u = 1) {
  if (A) {
    for (var e = u, t = F; e--; )
      t = /** @type {TemplateNode} */
      /* @__PURE__ */ bu(t);
    F = t;
  }
}
function E0() {
  for (var u = 0, e = F; ; ) {
    if (e.nodeType === 8) {
      var t = (
        /** @type {Comment} */
        e.data
      );
      if (t === B0) {
        if (u === 0) return e;
        u -= 1;
      } else (t === I0 || t === M0) && (u += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ bu(e)
    );
    e.remove(), e = r;
  }
}
function Ru(u) {
  if (typeof u != "object" || u === null || Vu in u)
    return u;
  const e = L0(u);
  if (e !== Sn && e !== $n)
    return u;
  var t = /* @__PURE__ */ new Map(), r = R0(u), n = /* @__PURE__ */ Eu(0), i = S, c = (o) => {
    var a = S;
    hu(i);
    var s = o();
    return hu(a), s;
  };
  return r && t.set("length", /* @__PURE__ */ Eu(
    /** @type {any[]} */
    u.length
  )), new Proxy(
    /** @type {any} */
    u,
    {
      defineProperty(o, a, s) {
        (!("value" in s) || s.configurable === !1 || s.enumerable === !1 || s.writable === !1) && jn();
        var l = t.get(a);
        return l === void 0 ? (l = c(() => /* @__PURE__ */ Eu(s.value)), t.set(a, l)) : T(
          l,
          c(() => Ru(s.value))
        ), !0;
      },
      deleteProperty(o, a) {
        var s = t.get(a);
        if (s === void 0)
          a in o && (t.set(
            a,
            c(() => /* @__PURE__ */ Eu(Z))
          ), l0(n));
        else {
          if (r && typeof a == "string") {
            var l = (
              /** @type {Source<number>} */
              t.get("length")
            ), f = Number(a);
            Number.isInteger(f) && f < l.v && T(l, f);
          }
          T(s, Z), l0(n);
        }
        return !0;
      },
      get(o, a, s) {
        var b;
        if (a === Vu)
          return u;
        var l = t.get(a), f = a in o;
        if (l === void 0 && (!f || (b = zu(o, a)) != null && b.writable) && (l = c(() => /* @__PURE__ */ Eu(Ru(f ? o[a] : Z))), t.set(a, l)), l !== void 0) {
          var h = E(l);
          return h === Z ? void 0 : h;
        }
        return Reflect.get(o, a, s);
      },
      getOwnPropertyDescriptor(o, a) {
        var s = Reflect.getOwnPropertyDescriptor(o, a);
        if (s && "value" in s) {
          var l = t.get(a);
          l && (s.value = E(l));
        } else if (s === void 0) {
          var f = t.get(a), h = f == null ? void 0 : f.v;
          if (f !== void 0 && h !== Z)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return s;
      },
      has(o, a) {
        var h;
        if (a === Vu)
          return !0;
        var s = t.get(a), l = s !== void 0 && s.v !== Z || Reflect.has(o, a);
        if (s !== void 0 || C !== null && (!l || (h = zu(o, a)) != null && h.writable)) {
          s === void 0 && (s = c(() => /* @__PURE__ */ Eu(l ? Ru(o[a]) : Z)), t.set(a, s));
          var f = E(s);
          if (f === Z)
            return !1;
        }
        return l;
      },
      set(o, a, s, l) {
        var p;
        var f = t.get(a), h = a in o;
        if (r && a === "length")
          for (var b = s; b < /** @type {Source<number>} */
          f.v; b += 1) {
            var d = t.get(b + "");
            d !== void 0 ? T(d, Z) : b in o && (d = c(() => /* @__PURE__ */ Eu(Z)), t.set(b + "", d));
          }
        f === void 0 ? (!h || (p = zu(o, a)) != null && p.writable) && (f = c(() => /* @__PURE__ */ Eu(void 0)), T(
          f,
          c(() => Ru(s))
        ), t.set(a, f)) : (h = f.v !== Z, T(
          f,
          c(() => Ru(s))
        ));
        var g = Reflect.getOwnPropertyDescriptor(o, a);
        if (g != null && g.set && g.set.call(l, s), !h) {
          if (r && typeof a == "string") {
            var v = (
              /** @type {Source<number>} */
              t.get("length")
            ), k = Number(a);
            Number.isInteger(k) && k >= v.v && T(v, k + 1);
          }
          l0(n);
        }
        return !0;
      },
      ownKeys(o) {
        E(n);
        var a = Reflect.ownKeys(o).filter((f) => {
          var h = t.get(f);
          return h === void 0 || h.v !== Z;
        });
        for (var [s, l] of t)
          l.v !== Z && !(s in o) && a.push(s);
        return a;
      },
      setPrototypeOf() {
        Un();
      }
    }
  );
}
function l0(u, e = 1) {
  T(u, u.v + e);
}
var ht, Qt, Xt, ur;
function D0() {
  if (ht === void 0) {
    ht = window, Qt = /Firefox/.test(navigator.userAgent);
    var u = Element.prototype, e = Node.prototype, t = Text.prototype;
    Xt = zu(e, "firstChild").get, ur = zu(e, "nextSibling").get, dt(u) && (u.__click = void 0, u.__className = void 0, u.__attributes = null, u.__style = void 0, u.__e = void 0), dt(t) && (t.__t = void 0);
  }
}
function fe(u = "") {
  return document.createTextNode(u);
}
// @__NO_SIDE_EFFECTS__
function su(u) {
  return Xt.call(u);
}
// @__NO_SIDE_EFFECTS__
function bu(u) {
  return ur.call(u);
}
function H(u, e) {
  if (!A)
    return /* @__PURE__ */ su(u);
  var t = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ su(F)
  );
  if (t === null)
    t = F.appendChild(fe());
  else if (e && t.nodeType !== 3) {
    var r = fe();
    return t == null || t.before(r), nu(r), r;
  }
  return nu(t), t;
}
function bt(u, e) {
  if (!A) {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ su(
        /** @type {Node} */
        u
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ bu(t) : t;
  }
  return F;
}
function ou(u, e = 1, t = !1) {
  let r = A ? F : u;
  for (var n; e--; )
    n = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ bu(r);
  if (!A)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (t && i !== 3) {
    var c = fe();
    return r === null ? n == null || n.after(c) : r.before(c), nu(c), c;
  }
  return nu(r), /** @type {TemplateNode} */
  r;
}
function er(u) {
  u.textContent = "";
}
function tr(u) {
  return u === this.v;
}
function rr(u, e) {
  return u != u ? e == e : u !== e || u !== null && typeof u == "object" || typeof u == "function";
}
function O0(u) {
  return !rr(u, this.v);
}
// @__NO_SIDE_EFFECTS__
function Xe(u) {
  var e = ru | du, t = S !== null && (S.f & ru) !== 0 ? (
    /** @type {Derived} */
    S
  ) : null;
  return C === null || t !== null && (t.f & J) !== 0 ? e |= J : C.f |= Yt, {
    ctx: I,
    deps: null,
    effects: null,
    equals: tr,
    f: e,
    fn: u,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: t ?? C
  };
}
// @__NO_SIDE_EFFECTS__
function N0(u) {
  const e = /* @__PURE__ */ Xe(u);
  return e.equals = O0, e;
}
function nr(u) {
  var e = u.effects;
  if (e !== null) {
    u.effects = null;
    for (var t = 0; t < e.length; t += 1)
      vu(
        /** @type {Effect} */
        e[t]
      );
  }
}
function Vn(u) {
  for (var e = u.parent; e !== null; ) {
    if ((e.f & ru) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function ir(u) {
  var e, t = C;
  $u(Vn(u));
  try {
    nr(u), e = gr(u);
  } finally {
    $u(t);
  }
  return e;
}
function cr(u) {
  var e = ir(u), t = (Fu || (u.f & J) !== 0) && u.deps !== null ? Iu : N;
  X(u, t), u.equals(e) || (u.v = e, u.wv = xr());
}
function or(u) {
  C === null && S === null && qn(), S !== null && (S.f & J) !== 0 && C === null && Ln(), ve && zn();
}
function Gn(u, e) {
  var t = e.last;
  t === null ? e.last = e.first = u : (t.next = u, u.prev = t, e.last = u);
}
function Pu(u, e, t, r = !0) {
  var n = C, i = {
    ctx: I,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: u | du,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: n,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (t)
    try {
      e0(i), i.f |= In;
    } catch (a) {
      throw vu(i), a;
    }
  else e !== null && t0(i);
  var c = t && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Yt | qe)) === 0;
  if (!c && r && (n !== null && Gn(i, n), S !== null && (S.f & ru) !== 0)) {
    var o = (
      /** @type {Derived} */
      S
    );
    (o.effects ?? (o.effects = [])).push(i);
  }
  return i;
}
function j0(u) {
  const e = Pu(Ye, null, !1);
  return X(e, N), e.teardown = u, e;
}
function C0(u) {
  or();
  var e = C !== null && (C.f & yu) !== 0 && I !== null && !I.m;
  if (e) {
    var t = (
      /** @type {ComponentContext} */
      I
    );
    (t.e ?? (t.e = [])).push({
      fn: u,
      effect: C,
      reaction: S
    });
  } else {
    var r = U0(u);
    return r;
  }
}
function Wn(u) {
  return or(), Qu(u);
}
function Jn(u) {
  const e = Pu(qu, u, !0);
  return () => {
    vu(e);
  };
}
function Yn(u) {
  const e = Pu(qu, u, !0);
  return (t = {}) => new Promise((r) => {
    t.outro ? Oe(e, () => {
      vu(e), r(void 0);
    }) : (vu(e), r(void 0));
  });
}
function U0(u) {
  return Pu(Jt, u, !1);
}
function pt(u, e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    I
  ), r = { effect: null, ran: !1 };
  t.l.r1.push(r), r.effect = Qu(() => {
    u(), !r.ran && (r.ran = !0, T(t.l.r2, !0), ue(e));
  });
}
function Kn() {
  var u = (
    /** @type {ComponentContextLegacy} */
    I
  );
  Qu(() => {
    if (E(u.l.r2)) {
      for (var e of u.l.r1) {
        var t = e.effect;
        (t.f & N) !== 0 && X(t, Iu), Xu(t) && e0(t), e.ran = !1;
      }
      u.l.r2.v = !1;
    }
  });
}
function Qu(u) {
  return Pu(Ye, u, !0);
}
function ae(u, e = [], t = Xe) {
  const r = e.map(t);
  return H0(() => u(...r.map(E)));
}
function H0(u, e = 0) {
  return Pu(Ye | q0 | e, u, !0);
}
function de(u, e = !0) {
  return Pu(Ye | yu, u, !0, e);
}
function ar(u) {
  var e = u.teardown;
  if (e !== null) {
    const t = ve, r = S;
    xt(!0), hu(null);
    try {
      e.call(null);
    } finally {
      xt(t), hu(r);
    }
  }
}
function sr(u, e = !1) {
  var t = u.first;
  for (u.first = u.last = null; t !== null; ) {
    var r = t.next;
    (t.f & qu) !== 0 ? t.parent = null : vu(t, e), t = r;
  }
}
function Qn(u) {
  for (var e = u.first; e !== null; ) {
    var t = e.next;
    (e.f & yu) === 0 && vu(e), e = t;
  }
}
function vu(u, e = !0) {
  var t = !1;
  (e || (u.f & Bn) !== 0) && u.nodes_start !== null && (lr(
    u.nodes_start,
    /** @type {TemplateNode} */
    u.nodes_end
  ), t = !0), sr(u, e && !t), Ze(u, 0), X(u, Ke);
  var r = u.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  ar(u);
  var n = u.parent;
  n !== null && n.first !== null && fr(u), u.next = u.prev = u.teardown = u.ctx = u.deps = u.fn = u.nodes_start = u.nodes_end = null;
}
function lr(u, e) {
  for (; u !== null; ) {
    var t = u === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ bu(u)
    );
    u.remove(), u = t;
  }
}
function fr(u) {
  var e = u.parent, t = u.prev, r = u.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === u && (e.first = r), e.last === u && (e.last = t));
}
function Oe(u, e) {
  var t = [];
  Z0(u, t, !0), dr(t, () => {
    vu(u), e && e();
  });
}
function dr(u, e) {
  var t = u.length;
  if (t > 0) {
    var r = () => --t || e();
    for (var n of u)
      n.out(r);
  } else
    e();
}
function Z0(u, e, t) {
  if ((u.f & ku) === 0) {
    if (u.f ^= ku, u.transitions !== null)
      for (const c of u.transitions)
        (c.is_global || t) && e.push(c);
    for (var r = u.first; r !== null; ) {
      var n = r.next, i = (r.f & P0) !== 0 || (r.f & yu) !== 0;
      Z0(r, e, i ? t : !1), r = n;
    }
  }
}
function Ne(u) {
  hr(u, !0);
}
function hr(u, e) {
  if ((u.f & ku) !== 0) {
    u.f ^= ku, (u.f & N) === 0 && (u.f ^= N), Xu(u) && (X(u, du), t0(u));
    for (var t = u.first; t !== null; ) {
      var r = t.next, n = (t.f & P0) !== 0 || (t.f & yu) !== 0;
      hr(t, n ? e : !1), t = r;
    }
    if (u.transitions !== null)
      for (const i of u.transitions)
        (i.is_global || e) && i.in();
  }
}
const Xn = typeof requestIdleCallback > "u" ? (u) => setTimeout(u, 1) : requestIdleCallback;
let he = [], be = [];
function br() {
  var u = he;
  he = [], Le(u);
}
function pr() {
  var u = be;
  be = [], Le(u);
}
function ui(u) {
  he.length === 0 && queueMicrotask(br), he.push(u);
}
function ei(u) {
  be.length === 0 && Xn(pr), be.push(u);
}
function _t() {
  he.length > 0 && br(), be.length > 0 && pr();
}
let Me = !1, je = !1, Ue = null, Lu = !1, ve = !1;
function xt(u) {
  ve = u;
}
let le = [];
let S = null, au = !1;
function hu(u) {
  S = u;
}
let C = null;
function $u(u) {
  C = u;
}
let O = null;
function ti(u) {
  S !== null && S.f & y0 && (O === null ? O = [u] : O.push(u));
}
let P = null, W = 0, K = null;
function ri(u) {
  K = u;
}
let _r = 1, He = 0, Fu = !1;
function xr() {
  return ++_r;
}
function Xu(u) {
  var f;
  var e = u.f;
  if ((e & du) !== 0)
    return !0;
  if ((e & Iu) !== 0) {
    var t = u.deps, r = (e & J) !== 0;
    if (t !== null) {
      var n, i, c = (e & Pe) !== 0, o = r && C !== null && !Fu, a = t.length;
      if (c || o) {
        var s = (
          /** @type {Derived} */
          u
        ), l = s.parent;
        for (n = 0; n < a; n++)
          i = t[n], (c || !((f = i == null ? void 0 : i.reactions) != null && f.includes(s))) && (i.reactions ?? (i.reactions = [])).push(s);
        c && (s.f ^= Pe), o && l !== null && (l.f & J) === 0 && (s.f ^= J);
      }
      for (n = 0; n < a; n++)
        if (i = t[n], Xu(
          /** @type {Derived} */
          i
        ) && cr(
          /** @type {Derived} */
          i
        ), i.wv > u.wv)
          return !0;
    }
    (!r || C !== null && !Fu) && X(u, N);
  }
  return !1;
}
function ni(u, e) {
  for (var t = e; t !== null; ) {
    if ((t.f & qe) !== 0)
      try {
        t.fn(u);
        return;
      } catch {
        t.f ^= qe;
      }
    t = t.parent;
  }
  throw Me = !1, u;
}
function mt(u) {
  return (u.f & Ke) === 0 && (u.parent === null || (u.parent.f & qe) === 0);
}
function u0(u, e, t, r) {
  if (Me) {
    if (t === null && (Me = !1), mt(e))
      throw u;
    return;
  }
  if (t !== null && (Me = !0), ni(u, e), mt(e))
    throw u;
}
function mr(u, e, t = !0) {
  var r = u.reactions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      O != null && O.includes(u) || ((i.f & ru) !== 0 ? mr(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (t ? X(i, du) : (i.f & N) !== 0 && X(i, Iu), t0(
        /** @type {Effect} */
        i
      )));
    }
}
function gr(u) {
  var b;
  var e = P, t = W, r = K, n = S, i = Fu, c = O, o = I, a = au, s = u.f;
  P = /** @type {null | Value[]} */
  null, W = 0, K = null, Fu = (s & J) !== 0 && (au || !Lu || S === null), S = (s & (yu | qu)) === 0 ? u : null, O = null, gt(u.ctx), au = !1, He++, u.f |= y0;
  try {
    var l = (
      /** @type {Function} */
      (0, u.fn)()
    ), f = u.deps;
    if (P !== null) {
      var h;
      if (Ze(u, W), f !== null && W > 0)
        for (f.length = W + P.length, h = 0; h < P.length; h++)
          f[W + h] = P[h];
      else
        u.deps = f = P;
      if (!Fu)
        for (h = W; h < f.length; h++)
          ((b = f[h]).reactions ?? (b.reactions = [])).push(u);
    } else f !== null && W < f.length && (Ze(u, W), f.length = W);
    if (ye() && K !== null && !au && f !== null && (u.f & (ru | Iu | du)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      K.length; h++)
        mr(
          K[h],
          /** @type {Effect} */
          u
        );
    return n !== null && n !== u && (He++, K !== null && (r === null ? r = K : r.push(.../** @type {Source[]} */
    K))), l;
  } finally {
    P = e, W = t, K = r, S = n, Fu = i, O = c, gt(o), au = a, u.f ^= y0;
  }
}
function ii(u, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = wn.call(t, u);
    if (r !== -1) {
      var n = t.length - 1;
      n === 0 ? t = e.reactions = null : (t[r] = t[n], t.pop());
    }
  }
  t === null && (e.f & ru) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (P === null || !P.includes(e)) && (X(e, Iu), (e.f & (J | Pe)) === 0 && (e.f ^= Pe), nr(
    /** @type {Derived} **/
    e
  ), Ze(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Ze(u, e) {
  var t = u.deps;
  if (t !== null)
    for (var r = e; r < t.length; r++)
      ii(u, t[r]);
}
function e0(u) {
  var e = u.f;
  if ((e & Ke) === 0) {
    X(u, N);
    var t = C, r = I, n = Lu;
    C = u, Lu = !0;
    try {
      (e & q0) !== 0 ? Qn(u) : sr(u), ar(u);
      var i = gr(u);
      u.teardown = typeof i == "function" ? i : null, u.wv = _r;
      var c = u.deps, o;
      ft && xn && u.f & du;
    } catch (a) {
      u0(a, u, t, r || u.ctx);
    } finally {
      Lu = n, C = t;
    }
  }
}
function ci() {
  try {
    Pn();
  } catch (u) {
    if (Ue !== null)
      u0(u, Ue, null);
    else
      throw u;
  }
}
function kr() {
  var u = Lu;
  try {
    var e = 0;
    for (Lu = !0; le.length > 0; ) {
      e++ > 1e3 && ci();
      var t = le, r = t.length;
      le = [];
      for (var n = 0; n < r; n++) {
        var i = ai(t[n]);
        oi(i);
      }
      pe.clear();
    }
  } finally {
    je = !1, Lu = u, Ue = null;
  }
}
function oi(u) {
  var e = u.length;
  if (e !== 0)
    for (var t = 0; t < e; t++) {
      var r = u[t];
      if ((r.f & (Ke | ku)) === 0)
        try {
          Xu(r) && (e0(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? fr(r) : r.fn = null));
        } catch (n) {
          u0(n, r, null, r.ctx);
        }
    }
}
function t0(u) {
  je || (je = !0, queueMicrotask(kr));
  for (var e = Ue = u; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if ((t & (qu | yu)) !== 0) {
      if ((t & N) === 0) return;
      e.f ^= N;
    }
  }
  le.push(e);
}
function ai(u) {
  for (var e = [], t = u; t !== null; ) {
    var r = t.f, n = (r & (yu | qu)) !== 0, i = n && (r & N) !== 0;
    if (!i && (r & ku) === 0) {
      if ((r & Jt) !== 0)
        e.push(t);
      else if (n)
        t.f ^= N;
      else
        try {
          Xu(t) && e0(t);
        } catch (a) {
          u0(a, t, null, t.ctx);
        }
      var c = t.first;
      if (c !== null) {
        t = c;
        continue;
      }
    }
    var o = t.parent;
    for (t = t.next; t === null && o !== null; )
      t = o.next, o = o.parent;
  }
  return e;
}
function A0(u) {
  var e;
  for (_t(); le.length > 0; )
    je = !0, kr(), _t();
  return (
    /** @type {T} */
    e
  );
}
function E(u) {
  var e = u.f, t = (e & ru) !== 0;
  if (S !== null && !au) {
    if (!(O != null && O.includes(u))) {
      var r = S.deps;
      u.rv < He && (u.rv = He, P === null && r !== null && r[W] === u ? W++ : P === null ? P = [u] : (!Fu || !P.includes(u)) && P.push(u));
    }
  } else if (t && /** @type {Derived} */
  u.deps === null && /** @type {Derived} */
  u.effects === null) {
    var n = (
      /** @type {Derived} */
      u
    ), i = n.parent;
    i !== null && (i.f & J) === 0 && (n.f ^= J);
  }
  return t && (n = /** @type {Derived} */
  u, Xu(n) && cr(n)), ve && pe.has(u) ? pe.get(u) : u.v;
}
function ue(u) {
  var e = au;
  try {
    return au = !0, u();
  } finally {
    au = e;
  }
}
const si = -7169;
function X(u, e) {
  u.f = u.f & si | e;
}
function vr(u) {
  if (!(typeof u != "object" || !u || u instanceof EventTarget)) {
    if (Vu in u)
      F0(u);
    else if (!Array.isArray(u))
      for (let e in u) {
        const t = u[e];
        typeof t == "object" && t && Vu in t && F0(t);
      }
  }
}
function F0(u, e = /* @__PURE__ */ new Set()) {
  if (typeof u == "object" && u !== null && // We don't want to traverse DOM elements
  !(u instanceof EventTarget) && !e.has(u)) {
    e.add(u), u instanceof Date && u.getTime();
    for (let r in u)
      try {
        F0(u[r], e);
      } catch {
      }
    const t = L0(u);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const r = Wt(t);
      for (let n in r) {
        const i = r[n].get;
        if (i)
          try {
            i.call(u);
          } catch {
          }
      }
    }
  }
}
const pe = /* @__PURE__ */ new Map();
function _e(u, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: u,
    reactions: null,
    equals: tr,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function Eu(u, e) {
  const t = _e(u);
  return ti(t), t;
}
// @__NO_SIDE_EFFECTS__
function tu(u, e = !1) {
  var r;
  const t = _e(u);
  return e || (t.equals = O0), Ku && I !== null && I.l !== null && ((r = I.l).s ?? (r.s = [])).push(t), t;
}
function T(u, e, t = !1) {
  S !== null && !au && ye() && (S.f & (ru | q0)) !== 0 && !(O != null && O.includes(u)) && Hn();
  let r = t ? Ru(e) : e;
  return yr(u, r);
}
function yr(u, e) {
  if (!u.equals(e)) {
    var t = u.v;
    ve ? pe.set(u, e) : pe.set(u, t), u.v = e, (u.f & ru) !== 0 && ((u.f & du) !== 0 && ir(
      /** @type {Derived} */
      u
    ), X(u, (u.f & J) === 0 ? N : Iu)), u.wv = xr(), Er(u, du), ye() && C !== null && (C.f & N) !== 0 && (C.f & (yu | qu)) === 0 && (K === null ? ri([u]) : K.push(u));
  }
  return e;
}
function Er(u, e) {
  var t = u.reactions;
  if (t !== null)
    for (var r = ye(), n = t.length, i = 0; i < n; i++) {
      var c = t[i], o = c.f;
      (o & du) === 0 && (!r && c === C || (X(c, e), (o & (N | J)) !== 0 && ((o & ru) !== 0 ? Er(
        /** @type {Derived} */
        c,
        Iu
      ) : t0(
        /** @type {Effect} */
        c
      ))));
    }
}
let I = null;
function gt(u) {
  I = u;
}
function Dr(u, e = !1, t) {
  var r = I = {
    p: I,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: u,
    x: null,
    l: null
  };
  Ku && !e && (I.l = {
    s: null,
    u: null,
    r1: [],
    r2: _e(!1)
  }), j0(() => {
    r.d = !0;
  });
}
function Cr(u) {
  const e = I;
  if (e !== null) {
    u !== void 0 && (e.x = u);
    const c = e.e;
    if (c !== null) {
      var t = C, r = S;
      e.e = null;
      try {
        for (var n = 0; n < c.length; n++) {
          var i = c[n];
          $u(i.effect), hu(i.reaction), U0(i.fn);
        }
      } finally {
        $u(t), hu(r);
      }
    }
    I = e.p, e.m = !0;
  }
  return u || /** @type {T} */
  {};
}
function ye() {
  return !Ku || I !== null && I.l === null;
}
const li = ["touchstart", "touchmove"];
function fi(u) {
  return li.includes(u);
}
let kt = !1;
function Ar() {
  kt || (kt = !0, document.addEventListener(
    "reset",
    (u) => {
      Promise.resolve().then(() => {
        var e;
        if (!u.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            u.target.elements
          )
            (e = t.__on_r) == null || e.call(t);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function di(u, e, t, r = !0) {
  r && t();
  for (var n of e)
    u.addEventListener(n, t);
  j0(() => {
    for (var i of e)
      u.removeEventListener(i, t);
  });
}
function V0(u) {
  var e = S, t = C;
  hu(null), $u(null);
  try {
    return u();
  } finally {
    hu(e), $u(t);
  }
}
function hi(u, e, t, r = t) {
  u.addEventListener(e, () => V0(t));
  const n = u.__on_r;
  n ? u.__on_r = () => {
    n(), r(!0);
  } : u.__on_r = () => r(!0), Ar();
}
const bi = /* @__PURE__ */ new Set(), vt = /* @__PURE__ */ new Set();
function pi(u, e, t, r = {}) {
  function n(i) {
    if (r.capture || se.call(e, i), !i.cancelBubble)
      return V0(() => t == null ? void 0 : t.call(this, i));
  }
  return u.startsWith("pointer") || u.startsWith("touch") || u === "wheel" ? ui(() => {
    e.addEventListener(u, n, r);
  }) : e.addEventListener(u, n, r), n;
}
function we(u, e, t, r, n) {
  var i = { capture: r, passive: n }, c = pi(u, e, t, i);
  (e === document.body || e === window || e === document) && j0(() => {
    e.removeEventListener(u, c, i);
  });
}
function se(u) {
  var p;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = u.type, n = ((p = u.composedPath) == null ? void 0 : p.call(u)) || [], i = (
    /** @type {null | Element} */
    n[0] || u.target
  ), c = 0, o = u.__root;
  if (o) {
    var a = n.indexOf(o);
    if (a !== -1 && (e === document || e === /** @type {any} */
    window)) {
      u.__root = e;
      return;
    }
    var s = n.indexOf(e);
    if (s === -1)
      return;
    a <= s && (c = a);
  }
  if (i = /** @type {Element} */
  n[c] || u.target, i !== e) {
    ze(u, "currentTarget", {
      configurable: !0,
      get() {
        return i || t;
      }
    });
    var l = S, f = C;
    hu(null), $u(null);
    try {
      for (var h, b = []; i !== null; ) {
        var d = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var g = i["__" + r];
          if (g != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          u.target === i))
            if (R0(g)) {
              var [v, ...k] = g;
              v.apply(i, [u, ...k]);
            } else
              g.call(i, u);
        } catch (x) {
          h ? b.push(x) : h = x;
        }
        if (u.cancelBubble || d === e || d === null)
          break;
        i = d;
      }
      if (h) {
        for (let x of b)
          queueMicrotask(() => {
            throw x;
          });
        throw h;
      }
    } finally {
      u.__root = e, delete u.currentTarget, hu(l), $u(f);
    }
  }
}
function Fr(u) {
  var e = document.createElement("template");
  return e.innerHTML = u, e.content;
}
function Su(u, e) {
  var t = (
    /** @type {Effect} */
    C
  );
  t.nodes_start === null && (t.nodes_start = u, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Ou(u, e) {
  var t = (e & Dn) !== 0, r = (e & Cn) !== 0, n, i = !u.startsWith("<!>");
  return () => {
    if (A)
      return Su(F, null), F;
    n === void 0 && (n = Fr(i ? u : "<!>" + u), t || (n = /** @type {Node} */
    /* @__PURE__ */ su(n)));
    var c = (
      /** @type {TemplateNode} */
      r || Qt ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (t) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ su(c)
      ), a = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      Su(o, a);
    } else
      Su(c, c);
    return c;
  };
}
function _i() {
  if (A)
    return Su(F, null), F;
  var u = document.createDocumentFragment(), e = document.createComment(""), t = fe();
  return u.append(e, t), Su(e, t), u;
}
function xu(u, e) {
  if (A) {
    C.nodes_end = F, Wu();
    return;
  }
  u !== null && u.before(
    /** @type {Node} */
    e
  );
}
function f0(u, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (u.__t ?? (u.__t = u.nodeValue)) && (u.__t = t, u.nodeValue = t + "");
}
function G0(u, e) {
  return wr(u, e);
}
function xi(u, e) {
  D0(), e.intro = e.intro ?? !1;
  const t = e.target, r = A, n = F;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ su(t)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== I0); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ bu(i);
    if (!i)
      throw Zu;
    gu(!0), nu(
      /** @type {Comment} */
      i
    ), Wu();
    const c = wr(u, { ...e, anchor: i });
    if (F === null || F.nodeType !== 8 || /** @type {Comment} */
    F.data !== B0)
      throw Qe(), Zu;
    return gu(!1), /**  @type {Exports} */
    c;
  } catch (c) {
    if (c === Zu)
      return e.recover === !1 && On(), D0(), er(t), gu(!1), G0(u, e);
    throw c;
  } finally {
    gu(r), nu(n);
  }
}
const ju = /* @__PURE__ */ new Map();
function wr(u, { target: e, anchor: t, props: r = {}, events: n, context: i, intro: c = !0 }) {
  D0();
  var o = /* @__PURE__ */ new Set(), a = (f) => {
    for (var h = 0; h < f.length; h++) {
      var b = f[h];
      if (!o.has(b)) {
        o.add(b);
        var d = fi(b);
        e.addEventListener(b, se, { passive: d });
        var g = ju.get(b);
        g === void 0 ? (document.addEventListener(b, se, { passive: d }), ju.set(b, 1)) : ju.set(b, g + 1);
      }
    }
  };
  a(z0(bi)), vt.add(a);
  var s = void 0, l = Yn(() => {
    var f = t ?? e.appendChild(fe());
    return de(() => {
      if (i) {
        Dr({});
        var h = (
          /** @type {ComponentContext} */
          I
        );
        h.c = i;
      }
      n && (r.$$events = n), A && Su(
        /** @type {TemplateNode} */
        f,
        null
      ), s = u(f, r) || {}, A && (C.nodes_end = F), i && Cr();
    }), () => {
      var d;
      for (var h of o) {
        e.removeEventListener(h, se);
        var b = (
          /** @type {number} */
          ju.get(h)
        );
        --b === 0 ? (document.removeEventListener(h, se), ju.delete(h)) : ju.set(h, b);
      }
      vt.delete(a), f !== t && ((d = f.parentNode) == null || d.removeChild(f));
    };
  });
  return w0.set(s, l), s;
}
let w0 = /* @__PURE__ */ new WeakMap();
function mi(u, e) {
  const t = w0.get(u);
  return t ? (w0.delete(u), t(e)) : Promise.resolve();
}
function Uu(u, e, [t, r] = [0, 0]) {
  A && t === 0 && Wu();
  var n = u, i = null, c = null, o = Z, a = t > 0 ? P0 : 0, s = !1;
  const l = (h, b = !0) => {
    s = !0, f(b, h);
  }, f = (h, b) => {
    if (o === (o = h)) return;
    let d = !1;
    if (A && r !== -1) {
      if (t === 0) {
        const v = (
          /** @type {Comment} */
          n.data
        );
        v === I0 ? r = 0 : v === M0 ? r = 1 / 0 : (r = parseInt(v.substring(1)), r !== r && (r = o ? 1 / 0 : -1));
      }
      const g = r > t;
      !!o === g && (n = E0(), nu(n), gu(!1), d = !0, r = -1);
    }
    o ? (i ? Ne(i) : b && (i = de(() => b(n))), c && Oe(c, () => {
      c = null;
    })) : (c ? Ne(c) : b && (c = de(() => b(n, [t + 1, r]))), i && Oe(i, () => {
      i = null;
    })), d && gu(!0);
  };
  H0(() => {
    s = !1, e(l), s || f(null, null);
  }, a), A && (n = F);
}
function gi(u, e) {
  return e;
}
function ki(u, e, t, r) {
  for (var n = [], i = e.length, c = 0; c < i; c++)
    Z0(e[c].e, n, !0);
  var o = i > 0 && n.length === 0 && t !== null;
  if (o) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    er(a), a.append(
      /** @type {Element} */
      t
    ), r.clear(), Du(u, e[0].prev, e[i - 1].next);
  }
  dr(n, () => {
    for (var s = 0; s < i; s++) {
      var l = e[s];
      o || (r.delete(l.k), Du(u, l.prev, l.next)), vu(l.e, !o);
    }
  });
}
function vi(u, e, t, r, n, i = null) {
  var c = u, o = { flags: e, items: /* @__PURE__ */ new Map(), first: null };
  A && Wu();
  var a = null, s = !1, l = /* @__PURE__ */ N0(() => {
    var f = t();
    return R0(f) ? f : f == null ? [] : z0(f);
  });
  H0(() => {
    var f = E(l), h = f.length;
    if (s && h === 0)
      return;
    s = h === 0;
    let b = !1;
    if (A) {
      var d = (
        /** @type {Comment} */
        c.data === M0
      );
      d !== (h === 0) && (c = E0(), nu(c), gu(!1), b = !0);
    }
    if (A) {
      for (var g = null, v, k = 0; k < h; k++) {
        if (F.nodeType === 8 && /** @type {Comment} */
        F.data === B0) {
          c = /** @type {Comment} */
          F, b = !0, gu(!1);
          break;
        }
        var p = f[k], x = r(p, k);
        v = Sr(
          F,
          o,
          g,
          null,
          p,
          x,
          k,
          n,
          e,
          t
        ), o.items.set(x, v), g = v;
      }
      h > 0 && nu(E0());
    }
    A || yi(f, o, c, n, e, r, t), i !== null && (h === 0 ? a ? Ne(a) : a = de(() => i(c)) : a !== null && Oe(a, () => {
      a = null;
    })), b && gu(!0), E(l);
  }), A && (c = F);
}
function yi(u, e, t, r, n, i, c) {
  var o = u.length, a = e.items, s = e.first, l = s, f, h = null, b = [], d = [], g, v, k, p;
  for (p = 0; p < o; p += 1) {
    if (g = u[p], v = i(g, p), k = a.get(v), k === void 0) {
      var x = l ? (
        /** @type {TemplateNode} */
        l.e.nodes_start
      ) : t;
      h = Sr(
        x,
        e,
        h,
        h === null ? e.first : h.next,
        g,
        v,
        p,
        r,
        n,
        c
      ), a.set(v, h), b = [], d = [], l = h.next;
      continue;
    }
    if (Ei(k, g, p), (k.e.f & ku) !== 0 && Ne(k.e), k !== l) {
      if (f !== void 0 && f.has(k)) {
        if (b.length < d.length) {
          var y = d[0], _;
          h = y.prev;
          var m = b[0], D = b[b.length - 1];
          for (_ = 0; _ < b.length; _ += 1)
            yt(b[_], y, t);
          for (_ = 0; _ < d.length; _ += 1)
            f.delete(d[_]);
          Du(e, m.prev, D.next), Du(e, h, m), Du(e, D, y), l = y, h = D, p -= 1, b = [], d = [];
        } else
          f.delete(k), yt(k, l, t), Du(e, k.prev, k.next), Du(e, k, h === null ? e.first : h.next), Du(e, h, k), h = k;
        continue;
      }
      for (b = [], d = []; l !== null && l.k !== v; )
        (l.e.f & ku) === 0 && (f ?? (f = /* @__PURE__ */ new Set())).add(l), d.push(l), l = l.next;
      if (l === null)
        continue;
      k = l;
    }
    b.push(k), h = k, l = k.next;
  }
  if (l !== null || f !== void 0) {
    for (var w = f === void 0 ? [] : z0(f); l !== null; )
      (l.e.f & ku) === 0 && w.push(l), l = l.next;
    var q = w.length;
    if (q > 0) {
      var G = null;
      ki(e, w, G, a);
    }
  }
  C.first = e.first && e.first.e, C.last = h && h.e;
}
function Ei(u, e, t, r) {
  yr(u.v, e), u.i = t;
}
function Sr(u, e, t, r, n, i, c, o, a, s) {
  var l = (a & gn) !== 0, f = (a & vn) === 0, h = l ? f ? /* @__PURE__ */ tu(n) : _e(n) : n, b = (a & kn) === 0 ? c : _e(c), d = {
    i: b,
    v: h,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: r
  };
  try {
    return d.e = de(() => o(u, h, b, s), A), d.e.prev = t && t.e, d.e.next = r && r.e, t === null ? e.first = d : (t.next = d, t.e.next = d.e), r !== null && (r.prev = d, r.e.prev = d.e), d;
  } finally {
  }
}
function yt(u, e, t) {
  for (var r = u.next ? (
    /** @type {TemplateNode} */
    u.next.e.nodes_start
  ) : t, n = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : t, i = (
    /** @type {TemplateNode} */
    u.e.nodes_start
  ); i !== r; ) {
    var c = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ bu(i)
    );
    n.before(i), i = c;
  }
}
function Du(u, e, t) {
  e === null ? u.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e);
}
function Di(u, e, t = !1, r = !1, n = !1) {
  var i = u, c = "";
  ae(() => {
    var o = (
      /** @type {Effect} */
      C
    );
    if (c === (c = e() ?? "")) {
      A && Wu();
      return;
    }
    if (o.nodes_start !== null && (lr(
      o.nodes_start,
      /** @type {TemplateNode} */
      o.nodes_end
    ), o.nodes_start = o.nodes_end = null), c !== "") {
      if (A) {
        F.data;
        for (var a = Wu(), s = a; a !== null && (a.nodeType !== 8 || /** @type {Comment} */
        a.data !== ""); )
          s = a, a = /** @type {TemplateNode} */
          /* @__PURE__ */ bu(a);
        if (a === null)
          throw Qe(), Zu;
        Su(F, s), i = nu(a);
        return;
      }
      var l = c + "";
      t ? l = `<svg>${l}</svg>` : r && (l = `<math>${l}</math>`);
      var f = Fr(l);
      if ((t || r) && (f = /** @type {Element} */
      /* @__PURE__ */ su(f)), Su(
        /** @type {TemplateNode} */
        /* @__PURE__ */ su(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), t || r)
        for (; /* @__PURE__ */ su(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ su(f)
          );
      else
        i.before(f);
    }
  });
}
function Ci(u, e, t) {
  U0(() => {
    var r = ue(() => e(u, t == null ? void 0 : t()) || {});
    if (t && (r != null && r.update)) {
      var n = !1, i = (
        /** @type {any} */
        {}
      );
      Qu(() => {
        var c = t();
        vr(c), n && rr(i, c) && (i = c, r.update(c));
      }), n = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
const Et = [...` 	
\r\f \v\uFEFF`];
function Ai(u, e, t) {
  var r = u == null ? "" : "" + u;
  if (t) {
    for (var n in t)
      if (t[n])
        r = r ? r + " " + n : n;
      else if (r.length)
        for (var i = n.length, c = 0; (c = r.indexOf(n, c)) >= 0; ) {
          var o = c + i;
          (c === 0 || Et.includes(r[c - 1])) && (o === r.length || Et.includes(r[o])) ? r = (c === 0 ? "" : r.substring(0, c)) + r.substring(o + 1) : c = o;
        }
  }
  return r === "" ? null : r;
}
function d0(u, e, t, r, n, i) {
  var c = u.__className;
  if (A || c !== t || c === void 0) {
    var o = Ai(t, r, i);
    (!A || o !== u.getAttribute("class")) && (o == null ? u.removeAttribute("class") : u.className = o), u.__className = t;
  } else if (i && n !== i)
    for (var a in i) {
      var s = !!i[a];
      (n == null || s !== !!n[a]) && u.classList.toggle(a, s);
    }
  return i;
}
const Fi = Symbol("is custom element"), wi = Symbol("is html");
function Si(u) {
  if (A) {
    var e = !1, t = () => {
      if (!e) {
        if (e = !0, u.hasAttribute("value")) {
          var r = u.value;
          Ve(u, "value", null), u.value = r;
        }
        if (u.hasAttribute("checked")) {
          var n = u.checked;
          Ve(u, "checked", null), u.checked = n;
        }
      }
    };
    u.__on_r = t, ei(t), Ar();
  }
}
function Ve(u, e, t, r) {
  var n = $i(u);
  A && (n[e] = u.getAttribute(e), e === "src" || e === "srcset" || e === "href" && u.nodeName === "LINK") || n[e] !== (n[e] = t) && (e === "loading" && (u[Rn] = t), t == null ? u.removeAttribute(e) : typeof t != "string" && Ti(u).includes(e) ? u[e] = t : u.setAttribute(e, t));
}
function $i(u) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    u.__attributes ?? (u.__attributes = {
      [Fi]: u.nodeName.includes("-"),
      [wi]: u.namespaceURI === An
    })
  );
}
var Dt = /* @__PURE__ */ new Map();
function Ti(u) {
  var e = Dt.get(u.nodeName);
  if (e) return e;
  Dt.set(u.nodeName, e = []);
  for (var t, r = u, n = Element.prototype; n !== r; ) {
    t = Wt(r);
    for (var i in t)
      t[i].set && e.push(i);
    r = L0(r);
  }
  return e;
}
function Ii(u, e, t = e) {
  var r = ye();
  hi(u, "input", (n) => {
    var i = n ? u.defaultValue : u.value;
    if (i = h0(u) ? b0(i) : i, t(i), r && i !== (i = e())) {
      var c = u.selectionStart, o = u.selectionEnd;
      u.value = i ?? "", o !== null && (u.selectionStart = c, u.selectionEnd = Math.min(o, u.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (A && u.defaultValue !== u.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ue(e) == null && u.value) && t(h0(u) ? b0(u.value) : u.value), Qu(() => {
    var n = e();
    h0(u) && n === b0(u.value) || u.type === "date" && !n && !u.value || n !== u.value && (u.value = n ?? "");
  });
}
function h0(u) {
  var e = u.type;
  return e === "number" || e === "range";
}
function b0(u) {
  return u === "" ? null : +u;
}
function Mi(u, e) {
  di(window, ["resize"], () => V0(() => e(window[u])));
}
function Bi(u = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    I
  ), t = e.l.u;
  if (!t) return;
  let r = () => vr(e.s);
  if (u) {
    let n = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const c = /* @__PURE__ */ Xe(() => {
      let o = !1;
      const a = e.s;
      for (const s in a)
        a[s] !== i[s] && (i[s] = a[s], o = !0);
      return o && n++, n;
    });
    r = () => E(c);
  }
  t.b.length && Wn(() => {
    Ct(e, r), Le(t.b);
  }), C0(() => {
    const n = ue(() => t.m.map(Tn));
    return () => {
      for (const i of n)
        typeof i == "function" && i();
    };
  }), t.a.length && C0(() => {
    Ct(e, r), Le(t.a);
  });
}
function Ct(u, e) {
  if (u.l.s)
    for (const t of u.l.s) E(t);
  e();
}
function Ri(u) {
  I === null && Fn(), Ku && I.l !== null ? zi(I).m.push(u) : C0(() => {
    const e = ue(u);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function zi(u) {
  var e = (
    /** @type {ComponentContextLegacy} */
    u.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
let Se = !1;
function Li(u) {
  var e = Se;
  try {
    return Se = !1, [u(), Se];
  } finally {
    Se = e;
  }
}
function At(u) {
  var e;
  return ((e = u.ctx) == null ? void 0 : e.d) ?? !1;
}
function Ft(u, e, t, r) {
  var y;
  var n = !Ku || (t & yn) !== 0, i = (t & En) !== 0, c = !1, o;
  [o, c] = Li(() => (
    /** @type {V} */
    u[e]
  ));
  var a = Vu in u || Kt in u, s = (((y = zu(u, e)) == null ? void 0 : y.set) ?? (a && e in u && ((_) => u[e] = _))) || void 0, l = (
    /** @type {V} */
    r
  ), f = !0, h = !1, b = () => (h = !0, f && (f = !1, l = /** @type {V} */
  r), l);
  o === void 0 && r !== void 0 && (s && n && Nn(), o = b(), s && s(o));
  var d;
  if (n)
    d = () => {
      var _ = (
        /** @type {V} */
        u[e]
      );
      return _ === void 0 ? b() : (f = !0, h = !1, _);
    };
  else {
    var g = /* @__PURE__ */ N0(
      () => (
        /** @type {V} */
        u[e]
      )
    );
    g.f |= Mn, d = () => {
      var _ = E(g);
      return _ !== void 0 && (l = /** @type {V} */
      void 0), _ === void 0 ? l : _;
    };
  }
  if (s) {
    var v = u.$$legacy;
    return function(_, m) {
      return arguments.length > 0 ? ((!n || !m || v || c) && s(m ? d() : _), _) : d();
    };
  }
  var k = !1, p = /* @__PURE__ */ tu(o), x = /* @__PURE__ */ Xe(() => {
    var _ = d(), m = E(p);
    return k ? (k = !1, m) : p.v = _;
  });
  return E(x), x.equals = O0, function(_, m) {
    if (arguments.length > 0) {
      const D = m ? E(x) : n && i ? Ru(_) : _;
      if (!x.equals(D)) {
        if (k = !0, T(p, D), h && l !== void 0 && (l = D), At(x))
          return _;
        ue(() => E(x));
      }
      return _;
    }
    return At(x) ? x.v : E(x);
  };
}
function qi(u) {
  return new Pi(u);
}
var mu, Q;
class Pi {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    a0(this, mu);
    /** @type {Record<string, any>} */
    a0(this, Q);
    var i;
    var t = /* @__PURE__ */ new Map(), r = (c, o) => {
      var a = /* @__PURE__ */ tu(o);
      return t.set(c, a), a;
    };
    const n = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(c, o) {
          return E(t.get(o) ?? r(o, Reflect.get(c, o)));
        },
        has(c, o) {
          return o === Kt ? !0 : (E(t.get(o) ?? r(o, Reflect.get(c, o))), Reflect.has(c, o));
        },
        set(c, o, a) {
          return T(t.get(o) ?? r(o, a), a), Reflect.set(c, o, a);
        }
      }
    );
    s0(this, Q, (e.hydrate ? xi : G0)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: n,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((i = e == null ? void 0 : e.props) != null && i.$$host) || e.sync === !1) && A0(), s0(this, mu, n.$$events);
    for (const c of Object.keys(j(this, Q)))
      c === "$set" || c === "$destroy" || c === "$on" || ze(this, c, {
        get() {
          return j(this, Q)[c];
        },
        /** @param {any} value */
        set(o) {
          j(this, Q)[c] = o;
        },
        enumerable: !0
      });
    j(this, Q).$set = /** @param {Record<string, any>} next */
    (c) => {
      Object.assign(n, c);
    }, j(this, Q).$destroy = () => {
      mi(j(this, Q));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    j(this, Q).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, t) {
    j(this, mu)[e] = j(this, mu)[e] || [];
    const r = (...n) => t.call(this, ...n);
    return j(this, mu)[e].push(r), () => {
      j(this, mu)[e] = j(this, mu)[e].filter(
        /** @param {any} fn */
        (n) => n !== r
      );
    };
  }
  $destroy() {
    j(this, Q).$destroy();
  }
}
mu = new WeakMap(), Q = new WeakMap();
let $r;
typeof HTMLElement == "function" && ($r = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, r) {
    super();
    /** The Svelte component constructor */
    eu(this, "$$ctor");
    /** Slots */
    eu(this, "$$s");
    /** @type {any} The Svelte component instance */
    eu(this, "$$c");
    /** Whether or not the custom element is connected */
    eu(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    eu(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    eu(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    eu(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    eu(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    eu(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    eu(this, "$$me");
    this.$$ctor = e, this.$$s = t, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const n = this.$$c.$on(e, t);
      this.$$l_u.set(t, n);
    }
    super.addEventListener(e, t, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, r) {
    if (super.removeEventListener(e, t, r), this.$$c) {
      const n = this.$$l_u.get(t);
      n && (n(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(n) {
        return (i) => {
          const c = document.createElement("slot");
          n !== "default" && (c.name = n), xu(i, c);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, r = Oi(this);
      for (const n of this.$$s)
        n in r && (n === "default" && !this.$$d.children ? (this.$$d.children = e(n), t.default = !0) : t[n] = e(n));
      for (const n of this.attributes) {
        const i = this.$$g_p(n.name);
        i in this.$$d || (this.$$d[i] = Be(i, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = qi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Jn(() => {
        Qu(() => {
          var n;
          this.$$r = !0;
          for (const i of Re(this.$$c)) {
            if (!((n = this.$$p_d[i]) != null && n.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const c = Be(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            c == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, c);
          }
          this.$$r = !1;
        });
      });
      for (const n in this.$$l)
        for (const i of this.$$l[n]) {
          const c = this.$$c.$on(n, i);
          this.$$l_u.set(i, c);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, r) {
    var n;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Be(e, r, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return Re(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Be(u, e, t, r) {
  var i;
  const n = (i = t[u]) == null ? void 0 : i.type;
  if (e = n === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !t[u])
    return e;
  if (r === "toAttribute")
    switch (n) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (n) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function Oi(u) {
  const e = {};
  return u.childNodes.forEach((t) => {
    e[
      /** @type {Element} node */
      t.slot || "default"
    ] = !0;
  }), e;
}
function Ni(u, e, t, r, n, i) {
  let c = class extends $r {
    constructor() {
      super(u, t, n), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Re(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return Re(e).forEach((o) => {
    ze(c.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(a) {
        var f;
        a = Be(o, a, e), this.$$d[o] = a;
        var s = this.$$c;
        if (s) {
          var l = (f = zu(s, o)) == null ? void 0 : f.get;
          l ? s[o] = a : s.$set({ [o]: a });
        }
      }
    });
  }), r.forEach((o) => {
    ze(c.prototype, o, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[o];
      }
    });
  }), u.element = /** @type {any} */
  c, c;
}
let $e;
const ji = new Uint8Array(16);
function Ui() {
  if (!$e && ($e = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !$e))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return $e(ji);
}
const L = [];
for (let u = 0; u < 256; ++u)
  L.push((u + 256).toString(16).slice(1));
function Hi(u, e = 0) {
  return L[u[e + 0]] + L[u[e + 1]] + L[u[e + 2]] + L[u[e + 3]] + "-" + L[u[e + 4]] + L[u[e + 5]] + "-" + L[u[e + 6]] + L[u[e + 7]] + "-" + L[u[e + 8]] + L[u[e + 9]] + "-" + L[u[e + 10]] + L[u[e + 11]] + L[u[e + 12]] + L[u[e + 13]] + L[u[e + 14]] + L[u[e + 15]];
}
const Zi = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), wt = {
  randomUUID: Zi
};
function Vi(u, e, t) {
  if (wt.randomUUID && !u)
    return wt.randomUUID();
  u = u || {};
  const r = u.random || (u.rng || Ui)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, Hi(r);
}
const St = {};
function Gi(u) {
  let e = St[u];
  if (e)
    return e;
  e = St[u] = [];
  for (let t = 0; t < 128; t++) {
    const r = String.fromCharCode(t);
    e.push(r);
  }
  for (let t = 0; t < u.length; t++) {
    const r = u.charCodeAt(t);
    e[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
  }
  return e;
}
function Ju(u, e) {
  typeof e != "string" && (e = Ju.defaultChars);
  const t = Gi(e);
  return u.replace(/(%[a-f0-9]{2})+/gi, function(r) {
    let n = "";
    for (let i = 0, c = r.length; i < c; i += 3) {
      const o = parseInt(r.slice(i + 1, i + 3), 16);
      if (o < 128) {
        n += t[o];
        continue;
      }
      if ((o & 224) === 192 && i + 3 < c) {
        const a = parseInt(r.slice(i + 4, i + 6), 16);
        if ((a & 192) === 128) {
          const s = o << 6 & 1984 | a & 63;
          s < 128 ? n += "��" : n += String.fromCharCode(s), i += 3;
          continue;
        }
      }
      if ((o & 240) === 224 && i + 6 < c) {
        const a = parseInt(r.slice(i + 4, i + 6), 16), s = parseInt(r.slice(i + 7, i + 9), 16);
        if ((a & 192) === 128 && (s & 192) === 128) {
          const l = o << 12 & 61440 | a << 6 & 4032 | s & 63;
          l < 2048 || l >= 55296 && l <= 57343 ? n += "���" : n += String.fromCharCode(l), i += 6;
          continue;
        }
      }
      if ((o & 248) === 240 && i + 9 < c) {
        const a = parseInt(r.slice(i + 4, i + 6), 16), s = parseInt(r.slice(i + 7, i + 9), 16), l = parseInt(r.slice(i + 10, i + 12), 16);
        if ((a & 192) === 128 && (s & 192) === 128 && (l & 192) === 128) {
          let f = o << 18 & 1835008 | a << 12 & 258048 | s << 6 & 4032 | l & 63;
          f < 65536 || f > 1114111 ? n += "����" : (f -= 65536, n += String.fromCharCode(55296 + (f >> 10), 56320 + (f & 1023))), i += 9;
          continue;
        }
      }
      n += "�";
    }
    return n;
  });
}
Ju.defaultChars = ";/?:@&=+$,#";
Ju.componentChars = "";
const $t = {};
function Wi(u) {
  let e = $t[u];
  if (e)
    return e;
  e = $t[u] = [];
  for (let t = 0; t < 128; t++) {
    const r = String.fromCharCode(t);
    /^[0-9a-z]$/i.test(r) ? e.push(r) : e.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
  }
  for (let t = 0; t < u.length; t++)
    e[u.charCodeAt(t)] = u[t];
  return e;
}
function Ee(u, e, t) {
  typeof e != "string" && (t = e, e = Ee.defaultChars), typeof t > "u" && (t = !0);
  const r = Wi(e);
  let n = "";
  for (let i = 0, c = u.length; i < c; i++) {
    const o = u.charCodeAt(i);
    if (t && o === 37 && i + 2 < c && /^[0-9a-f]{2}$/i.test(u.slice(i + 1, i + 3))) {
      n += u.slice(i, i + 3), i += 2;
      continue;
    }
    if (o < 128) {
      n += r[o];
      continue;
    }
    if (o >= 55296 && o <= 57343) {
      if (o >= 55296 && o <= 56319 && i + 1 < c) {
        const a = u.charCodeAt(i + 1);
        if (a >= 56320 && a <= 57343) {
          n += encodeURIComponent(u[i] + u[i + 1]), i++;
          continue;
        }
      }
      n += "%EF%BF%BD";
      continue;
    }
    n += encodeURIComponent(u[i]);
  }
  return n;
}
Ee.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Ee.componentChars = "-_.!~*'()";
function W0(u) {
  let e = "";
  return e += u.protocol || "", e += u.slashes ? "//" : "", e += u.auth ? u.auth + "@" : "", u.hostname && u.hostname.indexOf(":") !== -1 ? e += "[" + u.hostname + "]" : e += u.hostname || "", e += u.port ? ":" + u.port : "", e += u.pathname || "", e += u.search || "", e += u.hash || "", e;
}
function Ge() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const Ji = /^([a-z0-9.+-]+:)/i, Yi = /:[0-9]*$/, Ki = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Qi = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Xi = ["{", "}", "|", "\\", "^", "`"].concat(Qi), uc = ["'"].concat(Xi), Tt = ["%", "/", "?", ";", "#"].concat(uc), It = ["/", "?", "#"], ec = 255, Mt = /^[+a-z0-9A-Z_-]{0,63}$/, tc = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Bt = {
  javascript: !0,
  "javascript:": !0
}, Rt = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function J0(u, e) {
  if (u && u instanceof Ge) return u;
  const t = new Ge();
  return t.parse(u, e), t;
}
Ge.prototype.parse = function(u, e) {
  let t, r, n, i = u;
  if (i = i.trim(), !e && u.split("#").length === 1) {
    const s = Ki.exec(i);
    if (s)
      return this.pathname = s[1], s[2] && (this.search = s[2]), this;
  }
  let c = Ji.exec(i);
  if (c && (c = c[0], t = c.toLowerCase(), this.protocol = c, i = i.substr(c.length)), (e || c || i.match(/^\/\/[^@\/]+@[^@\/]+/)) && (n = i.substr(0, 2) === "//", n && !(c && Bt[c]) && (i = i.substr(2), this.slashes = !0)), !Bt[c] && (n || c && !Rt[c])) {
    let s = -1;
    for (let d = 0; d < It.length; d++)
      r = i.indexOf(It[d]), r !== -1 && (s === -1 || r < s) && (s = r);
    let l, f;
    s === -1 ? f = i.lastIndexOf("@") : f = i.lastIndexOf("@", s), f !== -1 && (l = i.slice(0, f), i = i.slice(f + 1), this.auth = l), s = -1;
    for (let d = 0; d < Tt.length; d++)
      r = i.indexOf(Tt[d]), r !== -1 && (s === -1 || r < s) && (s = r);
    s === -1 && (s = i.length), i[s - 1] === ":" && s--;
    const h = i.slice(0, s);
    i = i.slice(s), this.parseHost(h), this.hostname = this.hostname || "";
    const b = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!b) {
      const d = this.hostname.split(/\./);
      for (let g = 0, v = d.length; g < v; g++) {
        const k = d[g];
        if (k && !k.match(Mt)) {
          let p = "";
          for (let x = 0, y = k.length; x < y; x++)
            k.charCodeAt(x) > 127 ? p += "x" : p += k[x];
          if (!p.match(Mt)) {
            const x = d.slice(0, g), y = d.slice(g + 1), _ = k.match(tc);
            _ && (x.push(_[1]), y.unshift(_[2])), y.length && (i = y.join(".") + i), this.hostname = x.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > ec && (this.hostname = ""), b && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const o = i.indexOf("#");
  o !== -1 && (this.hash = i.substr(o), i = i.slice(0, o));
  const a = i.indexOf("?");
  return a !== -1 && (this.search = i.substr(a), i = i.slice(0, a)), i && (this.pathname = i), Rt[t] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
Ge.prototype.parseHost = function(u) {
  let e = Yi.exec(u);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), u = u.substr(0, u.length - e.length)), u && (this.hostname = u);
};
const rc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Ju,
  encode: Ee,
  format: W0,
  parse: J0
}, Symbol.toStringTag, { value: "Module" })), Tr = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Ir = /[\0-\x1F\x7F-\x9F]/, nc = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Y0 = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, Mr = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, Br = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, ic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: Tr,
  Cc: Ir,
  Cf: nc,
  P: Y0,
  S: Mr,
  Z: Br
}, Symbol.toStringTag, { value: "Module" })), cc = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((u) => u.charCodeAt(0))
), oc = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((u) => u.charCodeAt(0))
);
var p0;
const ac = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), sc = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (p0 = String.fromCodePoint) !== null && p0 !== void 0 ? p0 : function(u) {
    let e = "";
    return u > 65535 && (u -= 65536, e += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), e += String.fromCharCode(u), e;
  }
);
function lc(u) {
  var e;
  return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (e = ac.get(u)) !== null && e !== void 0 ? e : u;
}
var R;
(function(u) {
  u[u.NUM = 35] = "NUM", u[u.SEMI = 59] = "SEMI", u[u.EQUALS = 61] = "EQUALS", u[u.ZERO = 48] = "ZERO", u[u.NINE = 57] = "NINE", u[u.LOWER_A = 97] = "LOWER_A", u[u.LOWER_F = 102] = "LOWER_F", u[u.LOWER_X = 120] = "LOWER_X", u[u.LOWER_Z = 122] = "LOWER_Z", u[u.UPPER_A = 65] = "UPPER_A", u[u.UPPER_F = 70] = "UPPER_F", u[u.UPPER_Z = 90] = "UPPER_Z";
})(R || (R = {}));
const fc = 32;
var wu;
(function(u) {
  u[u.VALUE_LENGTH = 49152] = "VALUE_LENGTH", u[u.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", u[u.JUMP_TABLE = 127] = "JUMP_TABLE";
})(wu || (wu = {}));
function S0(u) {
  return u >= R.ZERO && u <= R.NINE;
}
function dc(u) {
  return u >= R.UPPER_A && u <= R.UPPER_F || u >= R.LOWER_A && u <= R.LOWER_F;
}
function hc(u) {
  return u >= R.UPPER_A && u <= R.UPPER_Z || u >= R.LOWER_A && u <= R.LOWER_Z || S0(u);
}
function bc(u) {
  return u === R.EQUALS || hc(u);
}
var B;
(function(u) {
  u[u.EntityStart = 0] = "EntityStart", u[u.NumericStart = 1] = "NumericStart", u[u.NumericDecimal = 2] = "NumericDecimal", u[u.NumericHex = 3] = "NumericHex", u[u.NamedEntity = 4] = "NamedEntity";
})(B || (B = {}));
var Au;
(function(u) {
  u[u.Legacy = 0] = "Legacy", u[u.Strict = 1] = "Strict", u[u.Attribute = 2] = "Attribute";
})(Au || (Au = {}));
class pc {
  constructor(e, t, r) {
    this.decodeTree = e, this.emitCodePoint = t, this.errors = r, this.state = B.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Au.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(e) {
    this.decodeMode = e, this.state = B.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(e, t) {
    switch (this.state) {
      case B.EntityStart:
        return e.charCodeAt(t) === R.NUM ? (this.state = B.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = B.NamedEntity, this.stateNamedEntity(e, t));
      case B.NumericStart:
        return this.stateNumericStart(e, t);
      case B.NumericDecimal:
        return this.stateNumericDecimal(e, t);
      case B.NumericHex:
        return this.stateNumericHex(e, t);
      case B.NamedEntity:
        return this.stateNamedEntity(e, t);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(e, t) {
    return t >= e.length ? -1 : (e.charCodeAt(t) | fc) === R.LOWER_X ? (this.state = B.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = B.NumericDecimal, this.stateNumericDecimal(e, t));
  }
  addToNumericResult(e, t, r, n) {
    if (t !== r) {
      const i = r - t;
      this.result = this.result * Math.pow(n, i) + parseInt(e.substr(t, i), n), this.consumed += i;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(e, t) {
    const r = t;
    for (; t < e.length; ) {
      const n = e.charCodeAt(t);
      if (S0(n) || dc(n))
        t += 1;
      else
        return this.addToNumericResult(e, r, t, 16), this.emitNumericEntity(n, 3);
    }
    return this.addToNumericResult(e, r, t, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(e, t) {
    const r = t;
    for (; t < e.length; ) {
      const n = e.charCodeAt(t);
      if (S0(n))
        t += 1;
      else
        return this.addToNumericResult(e, r, t, 10), this.emitNumericEntity(n, 2);
    }
    return this.addToNumericResult(e, r, t, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(e, t) {
    var r;
    if (this.consumed <= t)
      return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (e === R.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === Au.Strict)
      return 0;
    return this.emitCodePoint(lc(this.result), this.consumed), this.errors && (e !== R.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(e, t) {
    const { decodeTree: r } = this;
    let n = r[this.treeIndex], i = (n & wu.VALUE_LENGTH) >> 14;
    for (; t < e.length; t++, this.excess++) {
      const c = e.charCodeAt(t);
      if (this.treeIndex = _c(r, n, this.treeIndex + Math.max(1, i), c), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === Au.Attribute && // We shouldn't have consumed any characters after the entity,
        (i === 0 || // And there should be no invalid characters.
        bc(c)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (n = r[this.treeIndex], i = (n & wu.VALUE_LENGTH) >> 14, i !== 0) {
        if (c === R.SEMI)
          return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
        this.decodeMode !== Au.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var e;
    const { result: t, decodeTree: r } = this, n = (r[t] & wu.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(t, n, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(e, t, r) {
    const { decodeTree: n } = this;
    return this.emitCodePoint(t === 1 ? n[e] & ~wu.VALUE_LENGTH : n[e + 1], r), t === 3 && this.emitCodePoint(n[e + 2], r), r;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var e;
    switch (this.state) {
      case B.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== Au.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case B.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case B.NumericHex:
        return this.emitNumericEntity(0, 3);
      case B.NumericStart:
        return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case B.EntityStart:
        return 0;
    }
  }
}
function Rr(u) {
  let e = "";
  const t = new pc(u, (r) => e += sc(r));
  return function(n, i) {
    let c = 0, o = 0;
    for (; (o = n.indexOf("&", o)) >= 0; ) {
      e += n.slice(c, o), t.startEntity(i);
      const s = t.write(
        n,
        // Skip the "&"
        o + 1
      );
      if (s < 0) {
        c = o + t.end();
        break;
      }
      c = o + s, o = s === 0 ? c + 1 : c;
    }
    const a = e + n.slice(c);
    return e = "", a;
  };
}
function _c(u, e, t, r) {
  const n = (e & wu.BRANCH_LENGTH) >> 7, i = e & wu.JUMP_TABLE;
  if (n === 0)
    return i !== 0 && r === i ? t : -1;
  if (i) {
    const a = r - i;
    return a < 0 || a >= n ? -1 : u[t + a] - 1;
  }
  let c = t, o = c + n - 1;
  for (; c <= o; ) {
    const a = c + o >>> 1, s = u[a];
    if (s < r)
      c = a + 1;
    else if (s > r)
      o = a - 1;
    else
      return u[a + n];
  }
  return -1;
}
const xc = Rr(cc);
Rr(oc);
function zr(u, e = Au.Legacy) {
  return xc(u, e);
}
function mc(u) {
  return Object.prototype.toString.call(u);
}
function K0(u) {
  return mc(u) === "[object String]";
}
const gc = Object.prototype.hasOwnProperty;
function kc(u, e) {
  return gc.call(u, e);
}
function r0(u) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be object");
      Object.keys(t).forEach(function(r) {
        u[r] = t[r];
      });
    }
  }), u;
}
function Lr(u, e, t) {
  return [].concat(u.slice(0, e), t, u.slice(e + 1));
}
function Q0(u) {
  return !(u >= 55296 && u <= 57343 || u >= 64976 && u <= 65007 || (u & 65535) === 65535 || (u & 65535) === 65534 || u >= 0 && u <= 8 || u === 11 || u >= 14 && u <= 31 || u >= 127 && u <= 159 || u > 1114111);
}
function We(u) {
  if (u > 65535) {
    u -= 65536;
    const e = 55296 + (u >> 10), t = 56320 + (u & 1023);
    return String.fromCharCode(e, t);
  }
  return String.fromCharCode(u);
}
const qr = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, vc = /&([a-z#][a-z0-9]{1,31});/gi, yc = new RegExp(qr.source + "|" + vc.source, "gi"), Ec = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function Dc(u, e) {
  if (e.charCodeAt(0) === 35 && Ec.test(e)) {
    const r = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
    return Q0(r) ? We(r) : u;
  }
  const t = zr(u);
  return t !== u ? t : u;
}
function Cc(u) {
  return u.indexOf("\\") < 0 ? u : u.replace(qr, "$1");
}
function Yu(u) {
  return u.indexOf("\\") < 0 && u.indexOf("&") < 0 ? u : u.replace(yc, function(e, t, r) {
    return t || Dc(e, r);
  });
}
const Ac = /[&<>"]/, Fc = /[&<>"]/g, wc = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Sc(u) {
  return wc[u];
}
function Tu(u) {
  return Ac.test(u) ? u.replace(Fc, Sc) : u;
}
const $c = /[.?*+^$[\]\\(){}|-]/g;
function Tc(u) {
  return u.replace($c, "\\$&");
}
function $(u) {
  switch (u) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function xe(u) {
  if (u >= 8192 && u <= 8202)
    return !0;
  switch (u) {
    case 9:
    // \t
    case 10:
    // \n
    case 11:
    // \v
    case 12:
    // \f
    case 13:
    // \r
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function me(u) {
  return Y0.test(u) || Mr.test(u);
}
function ge(u) {
  switch (u) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function n0(u) {
  return u = u.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (u = u.replace(/ẞ/g, "ß")), u.toLowerCase().toUpperCase();
}
const Ic = { mdurl: rc, ucmicro: ic }, Mc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: Lr,
  assign: r0,
  escapeHtml: Tu,
  escapeRE: Tc,
  fromCodePoint: We,
  has: kc,
  isMdAsciiPunct: ge,
  isPunctChar: me,
  isSpace: $,
  isString: K0,
  isValidEntityCode: Q0,
  isWhiteSpace: xe,
  lib: Ic,
  normalizeReference: n0,
  unescapeAll: Yu,
  unescapeMd: Cc
}, Symbol.toStringTag, { value: "Module" }));
function Bc(u, e, t) {
  let r, n, i, c;
  const o = u.posMax, a = u.pos;
  for (u.pos = e + 1, r = 1; u.pos < o; ) {
    if (i = u.src.charCodeAt(u.pos), i === 93 && (r--, r === 0)) {
      n = !0;
      break;
    }
    if (c = u.pos, u.md.inline.skipToken(u), i === 91) {
      if (c === u.pos - 1)
        r++;
      else if (t)
        return u.pos = a, -1;
    }
  }
  let s = -1;
  return n && (s = u.pos), u.pos = a, s;
}
function Rc(u, e, t) {
  let r, n = e;
  const i = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (u.charCodeAt(n) === 60) {
    for (n++; n < t; ) {
      if (r = u.charCodeAt(n), r === 10 || r === 60)
        return i;
      if (r === 62)
        return i.pos = n + 1, i.str = Yu(u.slice(e + 1, n)), i.ok = !0, i;
      if (r === 92 && n + 1 < t) {
        n += 2;
        continue;
      }
      n++;
    }
    return i;
  }
  let c = 0;
  for (; n < t && (r = u.charCodeAt(n), !(r === 32 || r < 32 || r === 127)); ) {
    if (r === 92 && n + 1 < t) {
      if (u.charCodeAt(n + 1) === 32)
        break;
      n += 2;
      continue;
    }
    if (r === 40 && (c++, c > 32))
      return i;
    if (r === 41) {
      if (c === 0)
        break;
      c--;
    }
    n++;
  }
  return e === n || c !== 0 || (i.str = Yu(u.slice(e, n)), i.pos = n, i.ok = !0), i;
}
function zc(u, e, t, r) {
  let n, i = e;
  const c = {
    // if `true`, this is a valid link title
    ok: !1,
    // if `true`, this link can be continued on the next line
    can_continue: !1,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (r)
    c.str = r.str, c.marker = r.marker;
  else {
    if (i >= t)
      return c;
    let o = u.charCodeAt(i);
    if (o !== 34 && o !== 39 && o !== 40)
      return c;
    e++, i++, o === 40 && (o = 41), c.marker = o;
  }
  for (; i < t; ) {
    if (n = u.charCodeAt(i), n === c.marker)
      return c.pos = i + 1, c.str += Yu(u.slice(e, i)), c.ok = !0, c;
    if (n === 40 && c.marker === 41)
      return c;
    n === 92 && i + 1 < t && i++, i++;
  }
  return c.can_continue = !0, c.str += Yu(u.slice(e, i)), c;
}
const Lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: Rc,
  parseLinkLabel: Bc,
  parseLinkTitle: zc
}, Symbol.toStringTag, { value: "Module" })), pu = {};
pu.code_inline = function(u, e, t, r, n) {
  const i = u[e];
  return "<code" + n.renderAttrs(i) + ">" + Tu(i.content) + "</code>";
};
pu.code_block = function(u, e, t, r, n) {
  const i = u[e];
  return "<pre" + n.renderAttrs(i) + "><code>" + Tu(u[e].content) + `</code></pre>
`;
};
pu.fence = function(u, e, t, r, n) {
  const i = u[e], c = i.info ? Yu(i.info).trim() : "";
  let o = "", a = "";
  if (c) {
    const l = c.split(/(\s+)/g);
    o = l[0], a = l.slice(2).join("");
  }
  let s;
  if (t.highlight ? s = t.highlight(i.content, o, a) || Tu(i.content) : s = Tu(i.content), s.indexOf("<pre") === 0)
    return s + `
`;
  if (c) {
    const l = i.attrIndex("class"), f = i.attrs ? i.attrs.slice() : [];
    l < 0 ? f.push(["class", t.langPrefix + o]) : (f[l] = f[l].slice(), f[l][1] += " " + t.langPrefix + o);
    const h = {
      attrs: f
    };
    return `<pre><code${n.renderAttrs(h)}>${s}</code></pre>
`;
  }
  return `<pre><code${n.renderAttrs(i)}>${s}</code></pre>
`;
};
pu.image = function(u, e, t, r, n) {
  const i = u[e];
  return i.attrs[i.attrIndex("alt")][1] = n.renderInlineAsText(i.children, t, r), n.renderToken(u, e, t);
};
pu.hardbreak = function(u, e, t) {
  return t.xhtmlOut ? `<br />
` : `<br>
`;
};
pu.softbreak = function(u, e, t) {
  return t.breaks ? t.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
pu.text = function(u, e) {
  return Tu(u[e].content);
};
pu.html_block = function(u, e) {
  return u[e].content;
};
pu.html_inline = function(u, e) {
  return u[e].content;
};
function ee() {
  this.rules = r0({}, pu);
}
ee.prototype.renderAttrs = function(e) {
  let t, r, n;
  if (!e.attrs)
    return "";
  for (n = "", t = 0, r = e.attrs.length; t < r; t++)
    n += " " + Tu(e.attrs[t][0]) + '="' + Tu(e.attrs[t][1]) + '"';
  return n;
};
ee.prototype.renderToken = function(e, t, r) {
  const n = e[t];
  let i = "";
  if (n.hidden)
    return "";
  n.block && n.nesting !== -1 && t && e[t - 1].hidden && (i += `
`), i += (n.nesting === -1 ? "</" : "<") + n.tag, i += this.renderAttrs(n), n.nesting === 0 && r.xhtmlOut && (i += " /");
  let c = !1;
  if (n.block && (c = !0, n.nesting === 1 && t + 1 < e.length)) {
    const o = e[t + 1];
    (o.type === "inline" || o.hidden || o.nesting === -1 && o.tag === n.tag) && (c = !1);
  }
  return i += c ? `>
` : ">", i;
};
ee.prototype.renderInline = function(u, e, t) {
  let r = "";
  const n = this.rules;
  for (let i = 0, c = u.length; i < c; i++) {
    const o = u[i].type;
    typeof n[o] < "u" ? r += n[o](u, i, e, t, this) : r += this.renderToken(u, i, e);
  }
  return r;
};
ee.prototype.renderInlineAsText = function(u, e, t) {
  let r = "";
  for (let n = 0, i = u.length; n < i; n++)
    switch (u[n].type) {
      case "text":
        r += u[n].content;
        break;
      case "image":
        r += this.renderInlineAsText(u[n].children, e, t);
        break;
      case "html_inline":
      case "html_block":
        r += u[n].content;
        break;
      case "softbreak":
      case "hardbreak":
        r += `
`;
        break;
    }
  return r;
};
ee.prototype.render = function(u, e, t) {
  let r = "";
  const n = this.rules;
  for (let i = 0, c = u.length; i < c; i++) {
    const o = u[i].type;
    o === "inline" ? r += this.renderInline(u[i].children, e, t) : typeof n[o] < "u" ? r += n[o](u, i, e, t, this) : r += this.renderToken(u, i, e, t);
  }
  return r;
};
function V() {
  this.__rules__ = [], this.__cache__ = null;
}
V.prototype.__find__ = function(u) {
  for (let e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === u)
      return e;
  return -1;
};
V.prototype.__compile__ = function() {
  const u = this, e = [""];
  u.__rules__.forEach(function(t) {
    t.enabled && t.alt.forEach(function(r) {
      e.indexOf(r) < 0 && e.push(r);
    });
  }), u.__cache__ = {}, e.forEach(function(t) {
    u.__cache__[t] = [], u.__rules__.forEach(function(r) {
      r.enabled && (t && r.alt.indexOf(t) < 0 || u.__cache__[t].push(r.fn));
    });
  });
};
V.prototype.at = function(u, e, t) {
  const r = this.__find__(u), n = t || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__[r].fn = e, this.__rules__[r].alt = n.alt || [], this.__cache__ = null;
};
V.prototype.before = function(u, e, t, r) {
  const n = this.__find__(u), i = r || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(n, 0, {
    name: e,
    enabled: !0,
    fn: t,
    alt: i.alt || []
  }), this.__cache__ = null;
};
V.prototype.after = function(u, e, t, r) {
  const n = this.__find__(u), i = r || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(n + 1, 0, {
    name: e,
    enabled: !0,
    fn: t,
    alt: i.alt || []
  }), this.__cache__ = null;
};
V.prototype.push = function(u, e, t) {
  const r = t || {};
  this.__rules__.push({
    name: u,
    enabled: !0,
    fn: e,
    alt: r.alt || []
  }), this.__cache__ = null;
};
V.prototype.enable = function(u, e) {
  Array.isArray(u) || (u = [u]);
  const t = [];
  return u.forEach(function(r) {
    const n = this.__find__(r);
    if (n < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[n].enabled = !0, t.push(r);
  }, this), this.__cache__ = null, t;
};
V.prototype.enableOnly = function(u, e) {
  Array.isArray(u) || (u = [u]), this.__rules__.forEach(function(t) {
    t.enabled = !1;
  }), this.enable(u, e);
};
V.prototype.disable = function(u, e) {
  Array.isArray(u) || (u = [u]);
  const t = [];
  return u.forEach(function(r) {
    const n = this.__find__(r);
    if (n < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[n].enabled = !1, t.push(r);
  }, this), this.__cache__ = null, t;
};
V.prototype.getRules = function(u) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[u] || [];
};
function iu(u, e, t) {
  this.type = u, this.tag = e, this.attrs = null, this.map = null, this.nesting = t, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
iu.prototype.attrIndex = function(e) {
  if (!this.attrs)
    return -1;
  const t = this.attrs;
  for (let r = 0, n = t.length; r < n; r++)
    if (t[r][0] === e)
      return r;
  return -1;
};
iu.prototype.attrPush = function(e) {
  this.attrs ? this.attrs.push(e) : this.attrs = [e];
};
iu.prototype.attrSet = function(e, t) {
  const r = this.attrIndex(e), n = [e, t];
  r < 0 ? this.attrPush(n) : this.attrs[r] = n;
};
iu.prototype.attrGet = function(e) {
  const t = this.attrIndex(e);
  let r = null;
  return t >= 0 && (r = this.attrs[t][1]), r;
};
iu.prototype.attrJoin = function(e, t) {
  const r = this.attrIndex(e);
  r < 0 ? this.attrPush([e, t]) : this.attrs[r][1] = this.attrs[r][1] + " " + t;
};
function Pr(u, e, t) {
  this.src = u, this.env = t, this.tokens = [], this.inlineMode = !1, this.md = e;
}
Pr.prototype.Token = iu;
const qc = /\r\n?|\n/g, Pc = /\0/g;
function Oc(u) {
  let e;
  e = u.src.replace(qc, `
`), e = e.replace(Pc, "�"), u.src = e;
}
function Nc(u) {
  let e;
  u.inlineMode ? (e = new u.Token("inline", "", 0), e.content = u.src, e.map = [0, 1], e.children = [], u.tokens.push(e)) : u.md.block.parse(u.src, u.md, u.env, u.tokens);
}
function jc(u) {
  const e = u.tokens;
  for (let t = 0, r = e.length; t < r; t++) {
    const n = e[t];
    n.type === "inline" && u.md.inline.parse(n.content, u.md, u.env, n.children);
  }
}
function Uc(u) {
  return /^<a[>\s]/i.test(u);
}
function Hc(u) {
  return /^<\/a\s*>/i.test(u);
}
function Zc(u) {
  const e = u.tokens;
  if (u.md.options.linkify)
    for (let t = 0, r = e.length; t < r; t++) {
      if (e[t].type !== "inline" || !u.md.linkify.pretest(e[t].content))
        continue;
      let n = e[t].children, i = 0;
      for (let c = n.length - 1; c >= 0; c--) {
        const o = n[c];
        if (o.type === "link_close") {
          for (c--; n[c].level !== o.level && n[c].type !== "link_open"; )
            c--;
          continue;
        }
        if (o.type === "html_inline" && (Uc(o.content) && i > 0 && i--, Hc(o.content) && i++), !(i > 0) && o.type === "text" && u.md.linkify.test(o.content)) {
          const a = o.content;
          let s = u.md.linkify.match(a);
          const l = [];
          let f = o.level, h = 0;
          s.length > 0 && s[0].index === 0 && c > 0 && n[c - 1].type === "text_special" && (s = s.slice(1));
          for (let b = 0; b < s.length; b++) {
            const d = s[b].url, g = u.md.normalizeLink(d);
            if (!u.md.validateLink(g))
              continue;
            let v = s[b].text;
            s[b].schema ? s[b].schema === "mailto:" && !/^mailto:/i.test(v) ? v = u.md.normalizeLinkText("mailto:" + v).replace(/^mailto:/, "") : v = u.md.normalizeLinkText(v) : v = u.md.normalizeLinkText("http://" + v).replace(/^http:\/\//, "");
            const k = s[b].index;
            if (k > h) {
              const _ = new u.Token("text", "", 0);
              _.content = a.slice(h, k), _.level = f, l.push(_);
            }
            const p = new u.Token("link_open", "a", 1);
            p.attrs = [["href", g]], p.level = f++, p.markup = "linkify", p.info = "auto", l.push(p);
            const x = new u.Token("text", "", 0);
            x.content = v, x.level = f, l.push(x);
            const y = new u.Token("link_close", "a", -1);
            y.level = --f, y.markup = "linkify", y.info = "auto", l.push(y), h = s[b].lastIndex;
          }
          if (h < a.length) {
            const b = new u.Token("text", "", 0);
            b.content = a.slice(h), b.level = f, l.push(b);
          }
          e[t].children = n = Lr(n, c, l);
        }
      }
    }
}
const Or = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Vc = /\((c|tm|r)\)/i, Gc = /\((c|tm|r)\)/ig, Wc = {
  c: "©",
  r: "®",
  tm: "™"
};
function Jc(u, e) {
  return Wc[e.toLowerCase()];
}
function Yc(u) {
  let e = 0;
  for (let t = u.length - 1; t >= 0; t--) {
    const r = u[t];
    r.type === "text" && !e && (r.content = r.content.replace(Gc, Jc)), r.type === "link_open" && r.info === "auto" && e--, r.type === "link_close" && r.info === "auto" && e++;
  }
}
function Kc(u) {
  let e = 0;
  for (let t = u.length - 1; t >= 0; t--) {
    const r = u[t];
    r.type === "text" && !e && Or.test(r.content) && (r.content = r.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), r.type === "link_open" && r.info === "auto" && e--, r.type === "link_close" && r.info === "auto" && e++;
  }
}
function Qc(u) {
  let e;
  if (u.md.options.typographer)
    for (e = u.tokens.length - 1; e >= 0; e--)
      u.tokens[e].type === "inline" && (Vc.test(u.tokens[e].content) && Yc(u.tokens[e].children), Or.test(u.tokens[e].content) && Kc(u.tokens[e].children));
}
const Xc = /['"]/, zt = /['"]/g, Lt = "’";
function Te(u, e, t) {
  return u.slice(0, e) + t + u.slice(e + 1);
}
function uo(u, e) {
  let t;
  const r = [];
  for (let n = 0; n < u.length; n++) {
    const i = u[n], c = u[n].level;
    for (t = r.length - 1; t >= 0 && !(r[t].level <= c); t--)
      ;
    if (r.length = t + 1, i.type !== "text")
      continue;
    let o = i.content, a = 0, s = o.length;
    u:
      for (; a < s; ) {
        zt.lastIndex = a;
        const l = zt.exec(o);
        if (!l)
          break;
        let f = !0, h = !0;
        a = l.index + 1;
        const b = l[0] === "'";
        let d = 32;
        if (l.index - 1 >= 0)
          d = o.charCodeAt(l.index - 1);
        else
          for (t = n - 1; t >= 0 && !(u[t].type === "softbreak" || u[t].type === "hardbreak"); t--)
            if (u[t].content) {
              d = u[t].content.charCodeAt(u[t].content.length - 1);
              break;
            }
        let g = 32;
        if (a < s)
          g = o.charCodeAt(a);
        else
          for (t = n + 1; t < u.length && !(u[t].type === "softbreak" || u[t].type === "hardbreak"); t++)
            if (u[t].content) {
              g = u[t].content.charCodeAt(0);
              break;
            }
        const v = ge(d) || me(String.fromCharCode(d)), k = ge(g) || me(String.fromCharCode(g)), p = xe(d), x = xe(g);
        if (x ? f = !1 : k && (p || v || (f = !1)), p ? h = !1 : v && (x || k || (h = !1)), g === 34 && l[0] === '"' && d >= 48 && d <= 57 && (h = f = !1), f && h && (f = v, h = k), !f && !h) {
          b && (i.content = Te(i.content, l.index, Lt));
          continue;
        }
        if (h)
          for (t = r.length - 1; t >= 0; t--) {
            let y = r[t];
            if (r[t].level < c)
              break;
            if (y.single === b && r[t].level === c) {
              y = r[t];
              let _, m;
              b ? (_ = e.md.options.quotes[2], m = e.md.options.quotes[3]) : (_ = e.md.options.quotes[0], m = e.md.options.quotes[1]), i.content = Te(i.content, l.index, m), u[y.token].content = Te(
                u[y.token].content,
                y.pos,
                _
              ), a += m.length - 1, y.token === n && (a += _.length - 1), o = i.content, s = o.length, r.length = t;
              continue u;
            }
          }
        f ? r.push({
          token: n,
          pos: l.index,
          single: b,
          level: c
        }) : h && b && (i.content = Te(i.content, l.index, Lt));
      }
  }
}
function eo(u) {
  if (u.md.options.typographer)
    for (let e = u.tokens.length - 1; e >= 0; e--)
      u.tokens[e].type !== "inline" || !Xc.test(u.tokens[e].content) || uo(u.tokens[e].children, u);
}
function to(u) {
  let e, t;
  const r = u.tokens, n = r.length;
  for (let i = 0; i < n; i++) {
    if (r[i].type !== "inline") continue;
    const c = r[i].children, o = c.length;
    for (e = 0; e < o; e++)
      c[e].type === "text_special" && (c[e].type = "text");
    for (e = t = 0; e < o; e++)
      c[e].type === "text" && e + 1 < o && c[e + 1].type === "text" ? c[e + 1].content = c[e].content + c[e + 1].content : (e !== t && (c[t] = c[e]), t++);
    e !== t && (c.length = t);
  }
}
const _0 = [
  ["normalize", Oc],
  ["block", Nc],
  ["inline", jc],
  ["linkify", Zc],
  ["replacements", Qc],
  ["smartquotes", eo],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", to]
];
function X0() {
  this.ruler = new V();
  for (let u = 0; u < _0.length; u++)
    this.ruler.push(_0[u][0], _0[u][1]);
}
X0.prototype.process = function(u) {
  const e = this.ruler.getRules("");
  for (let t = 0, r = e.length; t < r; t++)
    e[t](u);
};
X0.prototype.State = Pr;
function _u(u, e, t, r) {
  this.src = u, this.md = e, this.env = t, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const n = this.src;
  for (let i = 0, c = 0, o = 0, a = 0, s = n.length, l = !1; c < s; c++) {
    const f = n.charCodeAt(c);
    if (!l)
      if ($(f)) {
        o++, f === 9 ? a += 4 - a % 4 : a++;
        continue;
      } else
        l = !0;
    (f === 10 || c === s - 1) && (f !== 10 && c++, this.bMarks.push(i), this.eMarks.push(c), this.tShift.push(o), this.sCount.push(a), this.bsCount.push(0), l = !1, o = 0, a = 0, i = c + 1);
  }
  this.bMarks.push(n.length), this.eMarks.push(n.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
_u.prototype.push = function(u, e, t) {
  const r = new iu(u, e, t);
  return r.block = !0, t < 0 && this.level--, r.level = this.level, t > 0 && this.level++, this.tokens.push(r), r;
};
_u.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
_u.prototype.skipEmptyLines = function(e) {
  for (let t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
_u.prototype.skipSpaces = function(e) {
  for (let t = this.src.length; e < t; e++) {
    const r = this.src.charCodeAt(e);
    if (!$(r))
      break;
  }
  return e;
};
_u.prototype.skipSpacesBack = function(e, t) {
  if (e <= t)
    return e;
  for (; e > t; )
    if (!$(this.src.charCodeAt(--e)))
      return e + 1;
  return e;
};
_u.prototype.skipChars = function(e, t) {
  for (let r = this.src.length; e < r && this.src.charCodeAt(e) === t; e++)
    ;
  return e;
};
_u.prototype.skipCharsBack = function(e, t, r) {
  if (e <= r)
    return e;
  for (; e > r; )
    if (t !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
_u.prototype.getLines = function(e, t, r, n) {
  if (e >= t)
    return "";
  const i = new Array(t - e);
  for (let c = 0, o = e; o < t; o++, c++) {
    let a = 0;
    const s = this.bMarks[o];
    let l = s, f;
    for (o + 1 < t || n ? f = this.eMarks[o] + 1 : f = this.eMarks[o]; l < f && a < r; ) {
      const h = this.src.charCodeAt(l);
      if ($(h))
        h === 9 ? a += 4 - (a + this.bsCount[o]) % 4 : a++;
      else if (l - s < this.tShift[o])
        a++;
      else
        break;
      l++;
    }
    a > r ? i[c] = new Array(a - r + 1).join(" ") + this.src.slice(l, f) : i[c] = this.src.slice(l, f);
  }
  return i.join("");
};
_u.prototype.Token = iu;
const ro = 65536;
function x0(u, e) {
  const t = u.bMarks[e] + u.tShift[e], r = u.eMarks[e];
  return u.src.slice(t, r);
}
function qt(u) {
  const e = [], t = u.length;
  let r = 0, n = u.charCodeAt(r), i = !1, c = 0, o = "";
  for (; r < t; )
    n === 124 && (i ? (o += u.substring(c, r - 1), c = r) : (e.push(o + u.substring(c, r)), o = "", c = r + 1)), i = n === 92, r++, n = u.charCodeAt(r);
  return e.push(o + u.substring(c)), e;
}
function no(u, e, t, r) {
  if (e + 2 > t)
    return !1;
  let n = e + 1;
  if (u.sCount[n] < u.blkIndent || u.sCount[n] - u.blkIndent >= 4)
    return !1;
  let i = u.bMarks[n] + u.tShift[n];
  if (i >= u.eMarks[n])
    return !1;
  const c = u.src.charCodeAt(i++);
  if (c !== 124 && c !== 45 && c !== 58 || i >= u.eMarks[n])
    return !1;
  const o = u.src.charCodeAt(i++);
  if (o !== 124 && o !== 45 && o !== 58 && !$(o) || c === 45 && $(o))
    return !1;
  for (; i < u.eMarks[n]; ) {
    const y = u.src.charCodeAt(i);
    if (y !== 124 && y !== 45 && y !== 58 && !$(y))
      return !1;
    i++;
  }
  let a = x0(u, e + 1), s = a.split("|");
  const l = [];
  for (let y = 0; y < s.length; y++) {
    const _ = s[y].trim();
    if (!_) {
      if (y === 0 || y === s.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(_))
      return !1;
    _.charCodeAt(_.length - 1) === 58 ? l.push(_.charCodeAt(0) === 58 ? "center" : "right") : _.charCodeAt(0) === 58 ? l.push("left") : l.push("");
  }
  if (a = x0(u, e).trim(), a.indexOf("|") === -1 || u.sCount[e] - u.blkIndent >= 4)
    return !1;
  s = qt(a), s.length && s[0] === "" && s.shift(), s.length && s[s.length - 1] === "" && s.pop();
  const f = s.length;
  if (f === 0 || f !== l.length)
    return !1;
  if (r)
    return !0;
  const h = u.parentType;
  u.parentType = "table";
  const b = u.md.block.ruler.getRules("blockquote"), d = u.push("table_open", "table", 1), g = [e, 0];
  d.map = g;
  const v = u.push("thead_open", "thead", 1);
  v.map = [e, e + 1];
  const k = u.push("tr_open", "tr", 1);
  k.map = [e, e + 1];
  for (let y = 0; y < s.length; y++) {
    const _ = u.push("th_open", "th", 1);
    l[y] && (_.attrs = [["style", "text-align:" + l[y]]]);
    const m = u.push("inline", "", 0);
    m.content = s[y].trim(), m.children = [], u.push("th_close", "th", -1);
  }
  u.push("tr_close", "tr", -1), u.push("thead_close", "thead", -1);
  let p, x = 0;
  for (n = e + 2; n < t && !(u.sCount[n] < u.blkIndent); n++) {
    let y = !1;
    for (let m = 0, D = b.length; m < D; m++)
      if (b[m](u, n, t, !0)) {
        y = !0;
        break;
      }
    if (y || (a = x0(u, n).trim(), !a) || u.sCount[n] - u.blkIndent >= 4 || (s = qt(a), s.length && s[0] === "" && s.shift(), s.length && s[s.length - 1] === "" && s.pop(), x += f - s.length, x > ro))
      break;
    if (n === e + 2) {
      const m = u.push("tbody_open", "tbody", 1);
      m.map = p = [e + 2, 0];
    }
    const _ = u.push("tr_open", "tr", 1);
    _.map = [n, n + 1];
    for (let m = 0; m < f; m++) {
      const D = u.push("td_open", "td", 1);
      l[m] && (D.attrs = [["style", "text-align:" + l[m]]]);
      const w = u.push("inline", "", 0);
      w.content = s[m] ? s[m].trim() : "", w.children = [], u.push("td_close", "td", -1);
    }
    u.push("tr_close", "tr", -1);
  }
  return p && (u.push("tbody_close", "tbody", -1), p[1] = n), u.push("table_close", "table", -1), g[1] = n, u.parentType = h, u.line = n, !0;
}
function io(u, e, t) {
  if (u.sCount[e] - u.blkIndent < 4)
    return !1;
  let r = e + 1, n = r;
  for (; r < t; ) {
    if (u.isEmpty(r)) {
      r++;
      continue;
    }
    if (u.sCount[r] - u.blkIndent >= 4) {
      r++, n = r;
      continue;
    }
    break;
  }
  u.line = n;
  const i = u.push("code_block", "code", 0);
  return i.content = u.getLines(e, n, 4 + u.blkIndent, !1) + `
`, i.map = [e, u.line], !0;
}
function co(u, e, t, r) {
  let n = u.bMarks[e] + u.tShift[e], i = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4 || n + 3 > i)
    return !1;
  const c = u.src.charCodeAt(n);
  if (c !== 126 && c !== 96)
    return !1;
  let o = n;
  n = u.skipChars(n, c);
  let a = n - o;
  if (a < 3)
    return !1;
  const s = u.src.slice(o, n), l = u.src.slice(n, i);
  if (c === 96 && l.indexOf(String.fromCharCode(c)) >= 0)
    return !1;
  if (r)
    return !0;
  let f = e, h = !1;
  for (; f++, !(f >= t || (n = o = u.bMarks[f] + u.tShift[f], i = u.eMarks[f], n < i && u.sCount[f] < u.blkIndent)); )
    if (u.src.charCodeAt(n) === c && !(u.sCount[f] - u.blkIndent >= 4) && (n = u.skipChars(n, c), !(n - o < a) && (n = u.skipSpaces(n), !(n < i)))) {
      h = !0;
      break;
    }
  a = u.sCount[e], u.line = f + (h ? 1 : 0);
  const b = u.push("fence", "code", 0);
  return b.info = l, b.content = u.getLines(e + 1, f, a, !0), b.markup = s, b.map = [e, u.line], !0;
}
function oo(u, e, t, r) {
  let n = u.bMarks[e] + u.tShift[e], i = u.eMarks[e];
  const c = u.lineMax;
  if (u.sCount[e] - u.blkIndent >= 4 || u.src.charCodeAt(n) !== 62)
    return !1;
  if (r)
    return !0;
  const o = [], a = [], s = [], l = [], f = u.md.block.ruler.getRules("blockquote"), h = u.parentType;
  u.parentType = "blockquote";
  let b = !1, d;
  for (d = e; d < t; d++) {
    const x = u.sCount[d] < u.blkIndent;
    if (n = u.bMarks[d] + u.tShift[d], i = u.eMarks[d], n >= i)
      break;
    if (u.src.charCodeAt(n++) === 62 && !x) {
      let _ = u.sCount[d] + 1, m, D;
      u.src.charCodeAt(n) === 32 ? (n++, _++, D = !1, m = !0) : u.src.charCodeAt(n) === 9 ? (m = !0, (u.bsCount[d] + _) % 4 === 3 ? (n++, _++, D = !1) : D = !0) : m = !1;
      let w = _;
      for (o.push(u.bMarks[d]), u.bMarks[d] = n; n < i; ) {
        const q = u.src.charCodeAt(n);
        if ($(q))
          q === 9 ? w += 4 - (w + u.bsCount[d] + (D ? 1 : 0)) % 4 : w++;
        else
          break;
        n++;
      }
      b = n >= i, a.push(u.bsCount[d]), u.bsCount[d] = u.sCount[d] + 1 + (m ? 1 : 0), s.push(u.sCount[d]), u.sCount[d] = w - _, l.push(u.tShift[d]), u.tShift[d] = n - u.bMarks[d];
      continue;
    }
    if (b)
      break;
    let y = !1;
    for (let _ = 0, m = f.length; _ < m; _++)
      if (f[_](u, d, t, !0)) {
        y = !0;
        break;
      }
    if (y) {
      u.lineMax = d, u.blkIndent !== 0 && (o.push(u.bMarks[d]), a.push(u.bsCount[d]), l.push(u.tShift[d]), s.push(u.sCount[d]), u.sCount[d] -= u.blkIndent);
      break;
    }
    o.push(u.bMarks[d]), a.push(u.bsCount[d]), l.push(u.tShift[d]), s.push(u.sCount[d]), u.sCount[d] = -1;
  }
  const g = u.blkIndent;
  u.blkIndent = 0;
  const v = u.push("blockquote_open", "blockquote", 1);
  v.markup = ">";
  const k = [e, 0];
  v.map = k, u.md.block.tokenize(u, e, d);
  const p = u.push("blockquote_close", "blockquote", -1);
  p.markup = ">", u.lineMax = c, u.parentType = h, k[1] = u.line;
  for (let x = 0; x < l.length; x++)
    u.bMarks[x + e] = o[x], u.tShift[x + e] = l[x], u.sCount[x + e] = s[x], u.bsCount[x + e] = a[x];
  return u.blkIndent = g, !0;
}
function ao(u, e, t, r) {
  const n = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  let i = u.bMarks[e] + u.tShift[e];
  const c = u.src.charCodeAt(i++);
  if (c !== 42 && c !== 45 && c !== 95)
    return !1;
  let o = 1;
  for (; i < n; ) {
    const s = u.src.charCodeAt(i++);
    if (s !== c && !$(s))
      return !1;
    s === c && o++;
  }
  if (o < 3)
    return !1;
  if (r)
    return !0;
  u.line = e + 1;
  const a = u.push("hr", "hr", 0);
  return a.map = [e, u.line], a.markup = Array(o + 1).join(String.fromCharCode(c)), !0;
}
function Pt(u, e) {
  const t = u.eMarks[e];
  let r = u.bMarks[e] + u.tShift[e];
  const n = u.src.charCodeAt(r++);
  if (n !== 42 && n !== 45 && n !== 43)
    return -1;
  if (r < t) {
    const i = u.src.charCodeAt(r);
    if (!$(i))
      return -1;
  }
  return r;
}
function Ot(u, e) {
  const t = u.bMarks[e] + u.tShift[e], r = u.eMarks[e];
  let n = t;
  if (n + 1 >= r)
    return -1;
  let i = u.src.charCodeAt(n++);
  if (i < 48 || i > 57)
    return -1;
  for (; ; ) {
    if (n >= r)
      return -1;
    if (i = u.src.charCodeAt(n++), i >= 48 && i <= 57) {
      if (n - t >= 10)
        return -1;
      continue;
    }
    if (i === 41 || i === 46)
      break;
    return -1;
  }
  return n < r && (i = u.src.charCodeAt(n), !$(i)) ? -1 : n;
}
function so(u, e) {
  const t = u.level + 2;
  for (let r = e + 2, n = u.tokens.length - 2; r < n; r++)
    u.tokens[r].level === t && u.tokens[r].type === "paragraph_open" && (u.tokens[r + 2].hidden = !0, u.tokens[r].hidden = !0, r += 2);
}
function lo(u, e, t, r) {
  let n, i, c, o, a = e, s = !0;
  if (u.sCount[a] - u.blkIndent >= 4 || u.listIndent >= 0 && u.sCount[a] - u.listIndent >= 4 && u.sCount[a] < u.blkIndent)
    return !1;
  let l = !1;
  r && u.parentType === "paragraph" && u.sCount[a] >= u.blkIndent && (l = !0);
  let f, h, b;
  if ((b = Ot(u, a)) >= 0) {
    if (f = !0, c = u.bMarks[a] + u.tShift[a], h = Number(u.src.slice(c, b - 1)), l && h !== 1) return !1;
  } else if ((b = Pt(u, a)) >= 0)
    f = !1;
  else
    return !1;
  if (l && u.skipSpaces(b) >= u.eMarks[a])
    return !1;
  if (r)
    return !0;
  const d = u.src.charCodeAt(b - 1), g = u.tokens.length;
  f ? (o = u.push("ordered_list_open", "ol", 1), h !== 1 && (o.attrs = [["start", h]])) : o = u.push("bullet_list_open", "ul", 1);
  const v = [a, 0];
  o.map = v, o.markup = String.fromCharCode(d);
  let k = !1;
  const p = u.md.block.ruler.getRules("list"), x = u.parentType;
  for (u.parentType = "list"; a < t; ) {
    i = b, n = u.eMarks[a];
    const y = u.sCount[a] + b - (u.bMarks[a] + u.tShift[a]);
    let _ = y;
    for (; i < n; ) {
      const cu = u.src.charCodeAt(i);
      if (cu === 9)
        _ += 4 - (_ + u.bsCount[a]) % 4;
      else if (cu === 32)
        _++;
      else
        break;
      i++;
    }
    const m = i;
    let D;
    m >= n ? D = 1 : D = _ - y, D > 4 && (D = 1);
    const w = y + D;
    o = u.push("list_item_open", "li", 1), o.markup = String.fromCharCode(d);
    const q = [a, 0];
    o.map = q, f && (o.info = u.src.slice(c, b - 1));
    const G = u.tight, te = u.tShift[a], Ae = u.sCount[a], re = u.listIndent;
    if (u.listIndent = u.blkIndent, u.blkIndent = w, u.tight = !0, u.tShift[a] = m - u.bMarks[a], u.sCount[a] = _, m >= n && u.isEmpty(a + 1) ? u.line = Math.min(u.line + 2, t) : u.md.block.tokenize(u, a, t, !0), (!u.tight || k) && (s = !1), k = u.line - a > 1 && u.isEmpty(u.line - 1), u.blkIndent = u.listIndent, u.listIndent = re, u.tShift[a] = te, u.sCount[a] = Ae, u.tight = G, o = u.push("list_item_close", "li", -1), o.markup = String.fromCharCode(d), a = u.line, q[1] = a, a >= t || u.sCount[a] < u.blkIndent || u.sCount[a] - u.blkIndent >= 4)
      break;
    let ne = !1;
    for (let cu = 0, ie = p.length; cu < ie; cu++)
      if (p[cu](u, a, t, !0)) {
        ne = !0;
        break;
      }
    if (ne)
      break;
    if (f) {
      if (b = Ot(u, a), b < 0)
        break;
      c = u.bMarks[a] + u.tShift[a];
    } else if (b = Pt(u, a), b < 0)
      break;
    if (d !== u.src.charCodeAt(b - 1))
      break;
  }
  return f ? o = u.push("ordered_list_close", "ol", -1) : o = u.push("bullet_list_close", "ul", -1), o.markup = String.fromCharCode(d), v[1] = a, u.line = a, u.parentType = x, s && so(u, g), !0;
}
function fo(u, e, t, r) {
  let n = u.bMarks[e] + u.tShift[e], i = u.eMarks[e], c = e + 1;
  if (u.sCount[e] - u.blkIndent >= 4 || u.src.charCodeAt(n) !== 91)
    return !1;
  function o(p) {
    const x = u.lineMax;
    if (p >= x || u.isEmpty(p))
      return null;
    let y = !1;
    if (u.sCount[p] - u.blkIndent > 3 && (y = !0), u.sCount[p] < 0 && (y = !0), !y) {
      const D = u.md.block.ruler.getRules("reference"), w = u.parentType;
      u.parentType = "reference";
      let q = !1;
      for (let G = 0, te = D.length; G < te; G++)
        if (D[G](u, p, x, !0)) {
          q = !0;
          break;
        }
      if (u.parentType = w, q)
        return null;
    }
    const _ = u.bMarks[p] + u.tShift[p], m = u.eMarks[p];
    return u.src.slice(_, m + 1);
  }
  let a = u.src.slice(n, i + 1);
  i = a.length;
  let s = -1;
  for (n = 1; n < i; n++) {
    const p = a.charCodeAt(n);
    if (p === 91)
      return !1;
    if (p === 93) {
      s = n;
      break;
    } else if (p === 10) {
      const x = o(c);
      x !== null && (a += x, i = a.length, c++);
    } else if (p === 92 && (n++, n < i && a.charCodeAt(n) === 10)) {
      const x = o(c);
      x !== null && (a += x, i = a.length, c++);
    }
  }
  if (s < 0 || a.charCodeAt(s + 1) !== 58)
    return !1;
  for (n = s + 2; n < i; n++) {
    const p = a.charCodeAt(n);
    if (p === 10) {
      const x = o(c);
      x !== null && (a += x, i = a.length, c++);
    } else if (!$(p)) break;
  }
  const l = u.md.helpers.parseLinkDestination(a, n, i);
  if (!l.ok)
    return !1;
  const f = u.md.normalizeLink(l.str);
  if (!u.md.validateLink(f))
    return !1;
  n = l.pos;
  const h = n, b = c, d = n;
  for (; n < i; n++) {
    const p = a.charCodeAt(n);
    if (p === 10) {
      const x = o(c);
      x !== null && (a += x, i = a.length, c++);
    } else if (!$(p)) break;
  }
  let g = u.md.helpers.parseLinkTitle(a, n, i);
  for (; g.can_continue; ) {
    const p = o(c);
    if (p === null) break;
    a += p, n = i, i = a.length, c++, g = u.md.helpers.parseLinkTitle(a, n, i, g);
  }
  let v;
  for (n < i && d !== n && g.ok ? (v = g.str, n = g.pos) : (v = "", n = h, c = b); n < i; ) {
    const p = a.charCodeAt(n);
    if (!$(p))
      break;
    n++;
  }
  if (n < i && a.charCodeAt(n) !== 10 && v)
    for (v = "", n = h, c = b; n < i; ) {
      const p = a.charCodeAt(n);
      if (!$(p))
        break;
      n++;
    }
  if (n < i && a.charCodeAt(n) !== 10)
    return !1;
  const k = n0(a.slice(1, s));
  return k ? (r || (typeof u.env.references > "u" && (u.env.references = {}), typeof u.env.references[k] > "u" && (u.env.references[k] = { title: v, href: f }), u.line = c), !0) : !1;
}
const ho = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], bo = "[a-zA-Z_:][a-zA-Z0-9:._-]*", po = "[^\"'=<>`\\x00-\\x20]+", _o = "'[^']*'", xo = '"[^"]*"', mo = "(?:" + po + "|" + _o + "|" + xo + ")", go = "(?:\\s+" + bo + "(?:\\s*=\\s*" + mo + ")?)", Nr = "<[A-Za-z][A-Za-z0-9\\-]*" + go + "*\\s*\\/?>", jr = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", ko = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", vo = "<[?][\\s\\S]*?[?]>", yo = "<![A-Za-z][^>]*>", Eo = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Do = new RegExp("^(?:" + Nr + "|" + jr + "|" + ko + "|" + vo + "|" + yo + "|" + Eo + ")"), Co = new RegExp("^(?:" + Nr + "|" + jr + ")"), Hu = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + ho.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(Co.source + "\\s*$"), /^$/, !1]
];
function Ao(u, e, t, r) {
  let n = u.bMarks[e] + u.tShift[e], i = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4 || !u.md.options.html || u.src.charCodeAt(n) !== 60)
    return !1;
  let c = u.src.slice(n, i), o = 0;
  for (; o < Hu.length && !Hu[o][0].test(c); o++)
    ;
  if (o === Hu.length)
    return !1;
  if (r)
    return Hu[o][2];
  let a = e + 1;
  if (!Hu[o][1].test(c)) {
    for (; a < t && !(u.sCount[a] < u.blkIndent); a++)
      if (n = u.bMarks[a] + u.tShift[a], i = u.eMarks[a], c = u.src.slice(n, i), Hu[o][1].test(c)) {
        c.length !== 0 && a++;
        break;
      }
  }
  u.line = a;
  const s = u.push("html_block", "", 0);
  return s.map = [e, a], s.content = u.getLines(e, a, u.blkIndent, !0), !0;
}
function Fo(u, e, t, r) {
  let n = u.bMarks[e] + u.tShift[e], i = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  let c = u.src.charCodeAt(n);
  if (c !== 35 || n >= i)
    return !1;
  let o = 1;
  for (c = u.src.charCodeAt(++n); c === 35 && n < i && o <= 6; )
    o++, c = u.src.charCodeAt(++n);
  if (o > 6 || n < i && !$(c))
    return !1;
  if (r)
    return !0;
  i = u.skipSpacesBack(i, n);
  const a = u.skipCharsBack(i, 35, n);
  a > n && $(u.src.charCodeAt(a - 1)) && (i = a), u.line = e + 1;
  const s = u.push("heading_open", "h" + String(o), 1);
  s.markup = "########".slice(0, o), s.map = [e, u.line];
  const l = u.push("inline", "", 0);
  l.content = u.src.slice(n, i).trim(), l.map = [e, u.line], l.children = [];
  const f = u.push("heading_close", "h" + String(o), -1);
  return f.markup = "########".slice(0, o), !0;
}
function wo(u, e, t) {
  const r = u.md.block.ruler.getRules("paragraph");
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  const n = u.parentType;
  u.parentType = "paragraph";
  let i = 0, c, o = e + 1;
  for (; o < t && !u.isEmpty(o); o++) {
    if (u.sCount[o] - u.blkIndent > 3)
      continue;
    if (u.sCount[o] >= u.blkIndent) {
      let b = u.bMarks[o] + u.tShift[o];
      const d = u.eMarks[o];
      if (b < d && (c = u.src.charCodeAt(b), (c === 45 || c === 61) && (b = u.skipChars(b, c), b = u.skipSpaces(b), b >= d))) {
        i = c === 61 ? 1 : 2;
        break;
      }
    }
    if (u.sCount[o] < 0)
      continue;
    let h = !1;
    for (let b = 0, d = r.length; b < d; b++)
      if (r[b](u, o, t, !0)) {
        h = !0;
        break;
      }
    if (h)
      break;
  }
  if (!i)
    return !1;
  const a = u.getLines(e, o, u.blkIndent, !1).trim();
  u.line = o + 1;
  const s = u.push("heading_open", "h" + String(i), 1);
  s.markup = String.fromCharCode(c), s.map = [e, u.line];
  const l = u.push("inline", "", 0);
  l.content = a, l.map = [e, u.line - 1], l.children = [];
  const f = u.push("heading_close", "h" + String(i), -1);
  return f.markup = String.fromCharCode(c), u.parentType = n, !0;
}
function So(u, e, t) {
  const r = u.md.block.ruler.getRules("paragraph"), n = u.parentType;
  let i = e + 1;
  for (u.parentType = "paragraph"; i < t && !u.isEmpty(i); i++) {
    if (u.sCount[i] - u.blkIndent > 3 || u.sCount[i] < 0)
      continue;
    let s = !1;
    for (let l = 0, f = r.length; l < f; l++)
      if (r[l](u, i, t, !0)) {
        s = !0;
        break;
      }
    if (s)
      break;
  }
  const c = u.getLines(e, i, u.blkIndent, !1).trim();
  u.line = i;
  const o = u.push("paragraph_open", "p", 1);
  o.map = [e, u.line];
  const a = u.push("inline", "", 0);
  return a.content = c, a.map = [e, u.line], a.children = [], u.push("paragraph_close", "p", -1), u.parentType = n, !0;
}
const Ie = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", no, ["paragraph", "reference"]],
  ["code", io],
  ["fence", co, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", oo, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", ao, ["paragraph", "reference", "blockquote", "list"]],
  ["list", lo, ["paragraph", "reference", "blockquote"]],
  ["reference", fo],
  ["html_block", Ao, ["paragraph", "reference", "blockquote"]],
  ["heading", Fo, ["paragraph", "reference", "blockquote"]],
  ["lheading", wo],
  ["paragraph", So]
];
function i0() {
  this.ruler = new V();
  for (let u = 0; u < Ie.length; u++)
    this.ruler.push(Ie[u][0], Ie[u][1], { alt: (Ie[u][2] || []).slice() });
}
i0.prototype.tokenize = function(u, e, t) {
  const r = this.ruler.getRules(""), n = r.length, i = u.md.options.maxNesting;
  let c = e, o = !1;
  for (; c < t && (u.line = c = u.skipEmptyLines(c), !(c >= t || u.sCount[c] < u.blkIndent)); ) {
    if (u.level >= i) {
      u.line = t;
      break;
    }
    const a = u.line;
    let s = !1;
    for (let l = 0; l < n; l++)
      if (s = r[l](u, c, t, !1), s) {
        if (a >= u.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!s) throw new Error("none of the block rules matched");
    u.tight = !o, u.isEmpty(u.line - 1) && (o = !0), c = u.line, c < t && u.isEmpty(c) && (o = !0, c++, u.line = c);
  }
};
i0.prototype.parse = function(u, e, t, r) {
  if (!u)
    return;
  const n = new this.State(u, e, t, r);
  this.tokenize(n, n.line, n.lineMax);
};
i0.prototype.State = _u;
function De(u, e, t, r) {
  this.src = u, this.env = t, this.md = e, this.tokens = r, this.tokens_meta = Array(r.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
De.prototype.pushPending = function() {
  const u = new iu("text", "", 0);
  return u.content = this.pending, u.level = this.pendingLevel, this.tokens.push(u), this.pending = "", u;
};
De.prototype.push = function(u, e, t) {
  this.pending && this.pushPending();
  const r = new iu(u, e, t);
  let n = null;
  return t < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), r.level = this.level, t > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], n = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(r), this.tokens_meta.push(n), r;
};
De.prototype.scanDelims = function(u, e) {
  const t = this.posMax, r = this.src.charCodeAt(u), n = u > 0 ? this.src.charCodeAt(u - 1) : 32;
  let i = u;
  for (; i < t && this.src.charCodeAt(i) === r; )
    i++;
  const c = i - u, o = i < t ? this.src.charCodeAt(i) : 32, a = ge(n) || me(String.fromCharCode(n)), s = ge(o) || me(String.fromCharCode(o)), l = xe(n), f = xe(o), h = !f && (!s || l || a), b = !l && (!a || f || s);
  return { can_open: h && (e || !b || a), can_close: b && (e || !h || s), length: c };
};
De.prototype.Token = iu;
function $o(u) {
  switch (u) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function To(u, e) {
  let t = u.pos;
  for (; t < u.posMax && !$o(u.src.charCodeAt(t)); )
    t++;
  return t === u.pos ? !1 : (e || (u.pending += u.src.slice(u.pos, t)), u.pos = t, !0);
}
const Io = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function Mo(u, e) {
  if (!u.md.options.linkify || u.linkLevel > 0) return !1;
  const t = u.pos, r = u.posMax;
  if (t + 3 > r || u.src.charCodeAt(t) !== 58 || u.src.charCodeAt(t + 1) !== 47 || u.src.charCodeAt(t + 2) !== 47) return !1;
  const n = u.pending.match(Io);
  if (!n) return !1;
  const i = n[1], c = u.md.linkify.matchAtStart(u.src.slice(t - i.length));
  if (!c) return !1;
  let o = c.url;
  if (o.length <= i.length) return !1;
  o = o.replace(/\*+$/, "");
  const a = u.md.normalizeLink(o);
  if (!u.md.validateLink(a)) return !1;
  if (!e) {
    u.pending = u.pending.slice(0, -i.length);
    const s = u.push("link_open", "a", 1);
    s.attrs = [["href", a]], s.markup = "linkify", s.info = "auto";
    const l = u.push("text", "", 0);
    l.content = u.md.normalizeLinkText(o);
    const f = u.push("link_close", "a", -1);
    f.markup = "linkify", f.info = "auto";
  }
  return u.pos += o.length - i.length, !0;
}
function Bo(u, e) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 10)
    return !1;
  const r = u.pending.length - 1, n = u.posMax;
  if (!e)
    if (r >= 0 && u.pending.charCodeAt(r) === 32)
      if (r >= 1 && u.pending.charCodeAt(r - 1) === 32) {
        let i = r - 1;
        for (; i >= 1 && u.pending.charCodeAt(i - 1) === 32; ) i--;
        u.pending = u.pending.slice(0, i), u.push("hardbreak", "br", 0);
      } else
        u.pending = u.pending.slice(0, -1), u.push("softbreak", "br", 0);
    else
      u.push("softbreak", "br", 0);
  for (t++; t < n && $(u.src.charCodeAt(t)); )
    t++;
  return u.pos = t, !0;
}
const ut = [];
for (let u = 0; u < 256; u++)
  ut.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(u) {
  ut[u.charCodeAt(0)] = 1;
});
function Ro(u, e) {
  let t = u.pos;
  const r = u.posMax;
  if (u.src.charCodeAt(t) !== 92 || (t++, t >= r)) return !1;
  let n = u.src.charCodeAt(t);
  if (n === 10) {
    for (e || u.push("hardbreak", "br", 0), t++; t < r && (n = u.src.charCodeAt(t), !!$(n)); )
      t++;
    return u.pos = t, !0;
  }
  let i = u.src[t];
  if (n >= 55296 && n <= 56319 && t + 1 < r) {
    const o = u.src.charCodeAt(t + 1);
    o >= 56320 && o <= 57343 && (i += u.src[t + 1], t++);
  }
  const c = "\\" + i;
  if (!e) {
    const o = u.push("text_special", "", 0);
    n < 256 && ut[n] !== 0 ? o.content = i : o.content = c, o.markup = c, o.info = "escape";
  }
  return u.pos = t + 1, !0;
}
function zo(u, e) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 96)
    return !1;
  const n = t;
  t++;
  const i = u.posMax;
  for (; t < i && u.src.charCodeAt(t) === 96; )
    t++;
  const c = u.src.slice(n, t), o = c.length;
  if (u.backticksScanned && (u.backticks[o] || 0) <= n)
    return e || (u.pending += c), u.pos += o, !0;
  let a = t, s;
  for (; (s = u.src.indexOf("`", a)) !== -1; ) {
    for (a = s + 1; a < i && u.src.charCodeAt(a) === 96; )
      a++;
    const l = a - s;
    if (l === o) {
      if (!e) {
        const f = u.push("code_inline", "code", 0);
        f.markup = c, f.content = u.src.slice(t, s).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return u.pos = a, !0;
    }
    u.backticks[l] = s;
  }
  return u.backticksScanned = !0, e || (u.pending += c), u.pos += o, !0;
}
function Lo(u, e) {
  const t = u.pos, r = u.src.charCodeAt(t);
  if (e || r !== 126)
    return !1;
  const n = u.scanDelims(u.pos, !0);
  let i = n.length;
  const c = String.fromCharCode(r);
  if (i < 2)
    return !1;
  let o;
  i % 2 && (o = u.push("text", "", 0), o.content = c, i--);
  for (let a = 0; a < i; a += 2)
    o = u.push("text", "", 0), o.content = c + c, u.delimiters.push({
      marker: r,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: u.tokens.length - 1,
      end: -1,
      open: n.can_open,
      close: n.can_close
    });
  return u.pos += n.length, !0;
}
function Nt(u, e) {
  let t;
  const r = [], n = e.length;
  for (let i = 0; i < n; i++) {
    const c = e[i];
    if (c.marker !== 126 || c.end === -1)
      continue;
    const o = e[c.end];
    t = u.tokens[c.token], t.type = "s_open", t.tag = "s", t.nesting = 1, t.markup = "~~", t.content = "", t = u.tokens[o.token], t.type = "s_close", t.tag = "s", t.nesting = -1, t.markup = "~~", t.content = "", u.tokens[o.token - 1].type === "text" && u.tokens[o.token - 1].content === "~" && r.push(o.token - 1);
  }
  for (; r.length; ) {
    const i = r.pop();
    let c = i + 1;
    for (; c < u.tokens.length && u.tokens[c].type === "s_close"; )
      c++;
    c--, i !== c && (t = u.tokens[c], u.tokens[c] = u.tokens[i], u.tokens[i] = t);
  }
}
function qo(u) {
  const e = u.tokens_meta, t = u.tokens_meta.length;
  Nt(u, u.delimiters);
  for (let r = 0; r < t; r++)
    e[r] && e[r].delimiters && Nt(u, e[r].delimiters);
}
const Ur = {
  tokenize: Lo,
  postProcess: qo
};
function Po(u, e) {
  const t = u.pos, r = u.src.charCodeAt(t);
  if (e || r !== 95 && r !== 42)
    return !1;
  const n = u.scanDelims(u.pos, r === 42);
  for (let i = 0; i < n.length; i++) {
    const c = u.push("text", "", 0);
    c.content = String.fromCharCode(r), u.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: r,
      // Total length of these series of delimiters.
      //
      length: n.length,
      // A position of the token this delimiter corresponds to.
      //
      token: u.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: n.can_open,
      close: n.can_close
    });
  }
  return u.pos += n.length, !0;
}
function jt(u, e) {
  const t = e.length;
  for (let r = t - 1; r >= 0; r--) {
    const n = e[r];
    if (n.marker !== 95 && n.marker !== 42 || n.end === -1)
      continue;
    const i = e[n.end], c = r > 0 && e[r - 1].end === n.end + 1 && // check that first two markers match and adjacent
    e[r - 1].marker === n.marker && e[r - 1].token === n.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    e[n.end + 1].token === i.token + 1, o = String.fromCharCode(n.marker), a = u.tokens[n.token];
    a.type = c ? "strong_open" : "em_open", a.tag = c ? "strong" : "em", a.nesting = 1, a.markup = c ? o + o : o, a.content = "";
    const s = u.tokens[i.token];
    s.type = c ? "strong_close" : "em_close", s.tag = c ? "strong" : "em", s.nesting = -1, s.markup = c ? o + o : o, s.content = "", c && (u.tokens[e[r - 1].token].content = "", u.tokens[e[n.end + 1].token].content = "", r--);
  }
}
function Oo(u) {
  const e = u.tokens_meta, t = u.tokens_meta.length;
  jt(u, u.delimiters);
  for (let r = 0; r < t; r++)
    e[r] && e[r].delimiters && jt(u, e[r].delimiters);
}
const Hr = {
  tokenize: Po,
  postProcess: Oo
};
function No(u, e) {
  let t, r, n, i, c = "", o = "", a = u.pos, s = !0;
  if (u.src.charCodeAt(u.pos) !== 91)
    return !1;
  const l = u.pos, f = u.posMax, h = u.pos + 1, b = u.md.helpers.parseLinkLabel(u, u.pos, !0);
  if (b < 0)
    return !1;
  let d = b + 1;
  if (d < f && u.src.charCodeAt(d) === 40) {
    for (s = !1, d++; d < f && (t = u.src.charCodeAt(d), !(!$(t) && t !== 10)); d++)
      ;
    if (d >= f)
      return !1;
    if (a = d, n = u.md.helpers.parseLinkDestination(u.src, d, u.posMax), n.ok) {
      for (c = u.md.normalizeLink(n.str), u.md.validateLink(c) ? d = n.pos : c = "", a = d; d < f && (t = u.src.charCodeAt(d), !(!$(t) && t !== 10)); d++)
        ;
      if (n = u.md.helpers.parseLinkTitle(u.src, d, u.posMax), d < f && a !== d && n.ok)
        for (o = n.str, d = n.pos; d < f && (t = u.src.charCodeAt(d), !(!$(t) && t !== 10)); d++)
          ;
    }
    (d >= f || u.src.charCodeAt(d) !== 41) && (s = !0), d++;
  }
  if (s) {
    if (typeof u.env.references > "u")
      return !1;
    if (d < f && u.src.charCodeAt(d) === 91 ? (a = d + 1, d = u.md.helpers.parseLinkLabel(u, d), d >= 0 ? r = u.src.slice(a, d++) : d = b + 1) : d = b + 1, r || (r = u.src.slice(h, b)), i = u.env.references[n0(r)], !i)
      return u.pos = l, !1;
    c = i.href, o = i.title;
  }
  if (!e) {
    u.pos = h, u.posMax = b;
    const g = u.push("link_open", "a", 1), v = [["href", c]];
    g.attrs = v, o && v.push(["title", o]), u.linkLevel++, u.md.inline.tokenize(u), u.linkLevel--, u.push("link_close", "a", -1);
  }
  return u.pos = d, u.posMax = f, !0;
}
function jo(u, e) {
  let t, r, n, i, c, o, a, s, l = "";
  const f = u.pos, h = u.posMax;
  if (u.src.charCodeAt(u.pos) !== 33 || u.src.charCodeAt(u.pos + 1) !== 91)
    return !1;
  const b = u.pos + 2, d = u.md.helpers.parseLinkLabel(u, u.pos + 1, !1);
  if (d < 0)
    return !1;
  if (i = d + 1, i < h && u.src.charCodeAt(i) === 40) {
    for (i++; i < h && (t = u.src.charCodeAt(i), !(!$(t) && t !== 10)); i++)
      ;
    if (i >= h)
      return !1;
    for (s = i, o = u.md.helpers.parseLinkDestination(u.src, i, u.posMax), o.ok && (l = u.md.normalizeLink(o.str), u.md.validateLink(l) ? i = o.pos : l = ""), s = i; i < h && (t = u.src.charCodeAt(i), !(!$(t) && t !== 10)); i++)
      ;
    if (o = u.md.helpers.parseLinkTitle(u.src, i, u.posMax), i < h && s !== i && o.ok)
      for (a = o.str, i = o.pos; i < h && (t = u.src.charCodeAt(i), !(!$(t) && t !== 10)); i++)
        ;
    else
      a = "";
    if (i >= h || u.src.charCodeAt(i) !== 41)
      return u.pos = f, !1;
    i++;
  } else {
    if (typeof u.env.references > "u")
      return !1;
    if (i < h && u.src.charCodeAt(i) === 91 ? (s = i + 1, i = u.md.helpers.parseLinkLabel(u, i), i >= 0 ? n = u.src.slice(s, i++) : i = d + 1) : i = d + 1, n || (n = u.src.slice(b, d)), c = u.env.references[n0(n)], !c)
      return u.pos = f, !1;
    l = c.href, a = c.title;
  }
  if (!e) {
    r = u.src.slice(b, d);
    const g = [];
    u.md.inline.parse(
      r,
      u.md,
      u.env,
      g
    );
    const v = u.push("image", "img", 0), k = [["src", l], ["alt", ""]];
    v.attrs = k, v.children = g, v.content = r, a && k.push(["title", a]);
  }
  return u.pos = i, u.posMax = h, !0;
}
const Uo = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, Ho = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function Zo(u, e) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 60)
    return !1;
  const r = u.pos, n = u.posMax;
  for (; ; ) {
    if (++t >= n) return !1;
    const c = u.src.charCodeAt(t);
    if (c === 60) return !1;
    if (c === 62) break;
  }
  const i = u.src.slice(r + 1, t);
  if (Ho.test(i)) {
    const c = u.md.normalizeLink(i);
    if (!u.md.validateLink(c))
      return !1;
    if (!e) {
      const o = u.push("link_open", "a", 1);
      o.attrs = [["href", c]], o.markup = "autolink", o.info = "auto";
      const a = u.push("text", "", 0);
      a.content = u.md.normalizeLinkText(i);
      const s = u.push("link_close", "a", -1);
      s.markup = "autolink", s.info = "auto";
    }
    return u.pos += i.length + 2, !0;
  }
  if (Uo.test(i)) {
    const c = u.md.normalizeLink("mailto:" + i);
    if (!u.md.validateLink(c))
      return !1;
    if (!e) {
      const o = u.push("link_open", "a", 1);
      o.attrs = [["href", c]], o.markup = "autolink", o.info = "auto";
      const a = u.push("text", "", 0);
      a.content = u.md.normalizeLinkText(i);
      const s = u.push("link_close", "a", -1);
      s.markup = "autolink", s.info = "auto";
    }
    return u.pos += i.length + 2, !0;
  }
  return !1;
}
function Vo(u) {
  return /^<a[>\s]/i.test(u);
}
function Go(u) {
  return /^<\/a\s*>/i.test(u);
}
function Wo(u) {
  const e = u | 32;
  return e >= 97 && e <= 122;
}
function Jo(u, e) {
  if (!u.md.options.html)
    return !1;
  const t = u.posMax, r = u.pos;
  if (u.src.charCodeAt(r) !== 60 || r + 2 >= t)
    return !1;
  const n = u.src.charCodeAt(r + 1);
  if (n !== 33 && n !== 63 && n !== 47 && !Wo(n))
    return !1;
  const i = u.src.slice(r).match(Do);
  if (!i)
    return !1;
  if (!e) {
    const c = u.push("html_inline", "", 0);
    c.content = i[0], Vo(c.content) && u.linkLevel++, Go(c.content) && u.linkLevel--;
  }
  return u.pos += i[0].length, !0;
}
const Yo = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, Ko = /^&([a-z][a-z0-9]{1,31});/i;
function Qo(u, e) {
  const t = u.pos, r = u.posMax;
  if (u.src.charCodeAt(t) !== 38 || t + 1 >= r) return !1;
  if (u.src.charCodeAt(t + 1) === 35) {
    const i = u.src.slice(t).match(Yo);
    if (i) {
      if (!e) {
        const c = i[1][0].toLowerCase() === "x" ? parseInt(i[1].slice(1), 16) : parseInt(i[1], 10), o = u.push("text_special", "", 0);
        o.content = Q0(c) ? We(c) : We(65533), o.markup = i[0], o.info = "entity";
      }
      return u.pos += i[0].length, !0;
    }
  } else {
    const i = u.src.slice(t).match(Ko);
    if (i) {
      const c = zr(i[0]);
      if (c !== i[0]) {
        if (!e) {
          const o = u.push("text_special", "", 0);
          o.content = c, o.markup = i[0], o.info = "entity";
        }
        return u.pos += i[0].length, !0;
      }
    }
  }
  return !1;
}
function Ut(u) {
  const e = {}, t = u.length;
  if (!t) return;
  let r = 0, n = -2;
  const i = [];
  for (let c = 0; c < t; c++) {
    const o = u[c];
    if (i.push(0), (u[r].marker !== o.marker || n !== o.token - 1) && (r = c), n = o.token, o.length = o.length || 0, !o.close) continue;
    e.hasOwnProperty(o.marker) || (e[o.marker] = [-1, -1, -1, -1, -1, -1]);
    const a = e[o.marker][(o.open ? 3 : 0) + o.length % 3];
    let s = r - i[r] - 1, l = s;
    for (; s > a; s -= i[s] + 1) {
      const f = u[s];
      if (f.marker === o.marker && f.open && f.end < 0) {
        let h = !1;
        if ((f.close || o.open) && (f.length + o.length) % 3 === 0 && (f.length % 3 !== 0 || o.length % 3 !== 0) && (h = !0), !h) {
          const b = s > 0 && !u[s - 1].open ? i[s - 1] + 1 : 0;
          i[c] = c - s + b, i[s] = b, o.open = !1, f.end = c, f.close = !1, l = -1, n = -2;
          break;
        }
      }
    }
    l !== -1 && (e[o.marker][(o.open ? 3 : 0) + (o.length || 0) % 3] = l);
  }
}
function Xo(u) {
  const e = u.tokens_meta, t = u.tokens_meta.length;
  Ut(u.delimiters);
  for (let r = 0; r < t; r++)
    e[r] && e[r].delimiters && Ut(e[r].delimiters);
}
function ua(u) {
  let e, t, r = 0;
  const n = u.tokens, i = u.tokens.length;
  for (e = t = 0; e < i; e++)
    n[e].nesting < 0 && r--, n[e].level = r, n[e].nesting > 0 && r++, n[e].type === "text" && e + 1 < i && n[e + 1].type === "text" ? n[e + 1].content = n[e].content + n[e + 1].content : (e !== t && (n[t] = n[e]), t++);
  e !== t && (n.length = t);
}
const m0 = [
  ["text", To],
  ["linkify", Mo],
  ["newline", Bo],
  ["escape", Ro],
  ["backticks", zo],
  ["strikethrough", Ur.tokenize],
  ["emphasis", Hr.tokenize],
  ["link", No],
  ["image", jo],
  ["autolink", Zo],
  ["html_inline", Jo],
  ["entity", Qo]
], g0 = [
  ["balance_pairs", Xo],
  ["strikethrough", Ur.postProcess],
  ["emphasis", Hr.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", ua]
];
function Ce() {
  this.ruler = new V();
  for (let u = 0; u < m0.length; u++)
    this.ruler.push(m0[u][0], m0[u][1]);
  this.ruler2 = new V();
  for (let u = 0; u < g0.length; u++)
    this.ruler2.push(g0[u][0], g0[u][1]);
}
Ce.prototype.skipToken = function(u) {
  const e = u.pos, t = this.ruler.getRules(""), r = t.length, n = u.md.options.maxNesting, i = u.cache;
  if (typeof i[e] < "u") {
    u.pos = i[e];
    return;
  }
  let c = !1;
  if (u.level < n) {
    for (let o = 0; o < r; o++)
      if (u.level++, c = t[o](u, !0), u.level--, c) {
        if (e >= u.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    u.pos = u.posMax;
  c || u.pos++, i[e] = u.pos;
};
Ce.prototype.tokenize = function(u) {
  const e = this.ruler.getRules(""), t = e.length, r = u.posMax, n = u.md.options.maxNesting;
  for (; u.pos < r; ) {
    const i = u.pos;
    let c = !1;
    if (u.level < n) {
      for (let o = 0; o < t; o++)
        if (c = e[o](u, !1), c) {
          if (i >= u.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (c) {
      if (u.pos >= r)
        break;
      continue;
    }
    u.pending += u.src[u.pos++];
  }
  u.pending && u.pushPending();
};
Ce.prototype.parse = function(u, e, t, r) {
  const n = new this.State(u, e, t, r);
  this.tokenize(n);
  const i = this.ruler2.getRules(""), c = i.length;
  for (let o = 0; o < c; o++)
    i[o](n);
};
Ce.prototype.State = De;
function ea(u) {
  const e = {};
  u = u || {}, e.src_Any = Tr.source, e.src_Cc = Ir.source, e.src_Z = Br.source, e.src_P = Y0.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
  const t = "[><｜]";
  return e.src_pseudo_letter = "(?:(?!" + t + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + t + "|" + e.src_ZPCc + ")(?!" + (u["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + t + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]|$)|" + (u["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + e.src_ZCc + "|$)|;(?!" + e.src_ZCc + "|$)|\\!+(?!" + e.src_ZCc + "|[!]|$)|\\?(?!" + e.src_ZCc + "|[?]|$))+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + t + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
}
function $0(u) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    t && Object.keys(t).forEach(function(r) {
      u[r] = t[r];
    });
  }), u;
}
function c0(u) {
  return Object.prototype.toString.call(u);
}
function ta(u) {
  return c0(u) === "[object String]";
}
function ra(u) {
  return c0(u) === "[object Object]";
}
function na(u) {
  return c0(u) === "[object RegExp]";
}
function Ht(u) {
  return c0(u) === "[object Function]";
}
function ia(u) {
  return u.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const Zr = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function ca(u) {
  return Object.keys(u || {}).reduce(function(e, t) {
    return e || Zr.hasOwnProperty(t);
  }, !1);
}
const oa = {
  "http:": {
    validate: function(u, e, t) {
      const r = u.slice(e);
      return t.re.http || (t.re.http = new RegExp(
        "^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re.src_path,
        "i"
      )), t.re.http.test(r) ? r.match(t.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(u, e, t) {
      const r = u.slice(e);
      return t.re.no_http || (t.re.no_http = new RegExp(
        "^" + t.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + t.re.src_domain + ")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path,
        "i"
      )), t.re.no_http.test(r) ? e >= 3 && u[e - 3] === ":" || e >= 3 && u[e - 3] === "/" ? 0 : r.match(t.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(u, e, t) {
      const r = u.slice(e);
      return t.re.mailto || (t.re.mailto = new RegExp(
        "^" + t.re.src_email_name + "@" + t.re.src_host_strict,
        "i"
      )), t.re.mailto.test(r) ? r.match(t.re.mailto)[0].length : 0;
    }
  }
}, aa = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", sa = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function la(u) {
  u.__index__ = -1, u.__text_cache__ = "";
}
function fa(u) {
  return function(e, t) {
    const r = e.slice(t);
    return u.test(r) ? r.match(u)[0].length : 0;
  };
}
function Zt() {
  return function(u, e) {
    e.normalize(u);
  };
}
function Je(u) {
  const e = u.re = ea(u.__opts__), t = u.__tlds__.slice();
  u.onCompile(), u.__tlds_replaced__ || t.push(aa), t.push(e.src_xn), e.src_tlds = t.join("|");
  function r(o) {
    return o.replace("%TLDS%", e.src_tlds);
  }
  e.email_fuzzy = RegExp(r(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(r(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(r(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(r(e.tpl_host_fuzzy_test), "i");
  const n = [];
  u.__compiled__ = {};
  function i(o, a) {
    throw new Error('(LinkifyIt) Invalid schema "' + o + '": ' + a);
  }
  Object.keys(u.__schemas__).forEach(function(o) {
    const a = u.__schemas__[o];
    if (a === null)
      return;
    const s = { validate: null, link: null };
    if (u.__compiled__[o] = s, ra(a)) {
      na(a.validate) ? s.validate = fa(a.validate) : Ht(a.validate) ? s.validate = a.validate : i(o, a), Ht(a.normalize) ? s.normalize = a.normalize : a.normalize ? i(o, a) : s.normalize = Zt();
      return;
    }
    if (ta(a)) {
      n.push(o);
      return;
    }
    i(o, a);
  }), n.forEach(function(o) {
    u.__compiled__[u.__schemas__[o]] && (u.__compiled__[o].validate = u.__compiled__[u.__schemas__[o]].validate, u.__compiled__[o].normalize = u.__compiled__[u.__schemas__[o]].normalize);
  }), u.__compiled__[""] = { validate: null, normalize: Zt() };
  const c = Object.keys(u.__compiled__).filter(function(o) {
    return o.length > 0 && u.__compiled__[o];
  }).map(ia).join("|");
  u.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + c + ")", "i"), u.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + c + ")", "ig"), u.re.schema_at_start = RegExp("^" + u.re.schema_search.source, "i"), u.re.pretest = RegExp(
    "(" + u.re.schema_test.source + ")|(" + u.re.host_fuzzy_test.source + ")|@",
    "i"
  ), la(u);
}
function da(u, e) {
  const t = u.__index__, r = u.__last_index__, n = u.__text_cache__.slice(t, r);
  this.schema = u.__schema__.toLowerCase(), this.index = t + e, this.lastIndex = r + e, this.raw = n, this.text = n, this.url = n;
}
function T0(u, e) {
  const t = new da(u, e);
  return u.__compiled__[t.schema].normalize(t, u), t;
}
function Y(u, e) {
  if (!(this instanceof Y))
    return new Y(u, e);
  e || ca(u) && (e = u, u = {}), this.__opts__ = $0({}, Zr, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = $0({}, oa, u), this.__compiled__ = {}, this.__tlds__ = sa, this.__tlds_replaced__ = !1, this.re = {}, Je(this);
}
Y.prototype.add = function(e, t) {
  return this.__schemas__[e] = t, Je(this), this;
};
Y.prototype.set = function(e) {
  return this.__opts__ = $0(this.__opts__, e), this;
};
Y.prototype.test = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return !1;
  let t, r, n, i, c, o, a, s, l;
  if (this.re.schema_test.test(e)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (t = a.exec(e)) !== null; )
      if (i = this.testSchemaAt(e, t[2], a.lastIndex), i) {
        this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + i;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (s = e.search(this.re.host_fuzzy_test), s >= 0 && (this.__index__ < 0 || s < this.__index__) && (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (c = r.index + r[1].length, (this.__index__ < 0 || c < this.__index__) && (this.__schema__ = "", this.__index__ = c, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (l = e.indexOf("@"), l >= 0 && (n = e.match(this.re.email_fuzzy)) !== null && (c = n.index + n[1].length, o = n.index + n[0].length, (this.__index__ < 0 || c < this.__index__ || c === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = c, this.__last_index__ = o))), this.__index__ >= 0;
};
Y.prototype.pretest = function(e) {
  return this.re.pretest.test(e);
};
Y.prototype.testSchemaAt = function(e, t, r) {
  return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0;
};
Y.prototype.match = function(e) {
  const t = [];
  let r = 0;
  this.__index__ >= 0 && this.__text_cache__ === e && (t.push(T0(this, r)), r = this.__last_index__);
  let n = r ? e.slice(r) : e;
  for (; this.test(n); )
    t.push(T0(this, r)), n = n.slice(this.__last_index__), r += this.__last_index__;
  return t.length ? t : null;
};
Y.prototype.matchAtStart = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return null;
  const t = this.re.schema_at_start.exec(e);
  if (!t) return null;
  const r = this.testSchemaAt(e, t[2], t[0].length);
  return r ? (this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r, T0(this, 0)) : null;
};
Y.prototype.tlds = function(e, t) {
  return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(r, n, i) {
    return r !== i[n - 1];
  }).reverse(), Je(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, Je(this), this);
};
Y.prototype.normalize = function(e) {
  e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
};
Y.prototype.onCompile = function() {
};
const Gu = 2147483647, lu = 36, et = 1, ke = 26, ha = 38, ba = 700, Vr = 72, Gr = 128, Wr = "-", pa = /^xn--/, _a = /[^\0-\x7F]/, xa = /[\x2E\u3002\uFF0E\uFF61]/g, ma = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, k0 = lu - et, fu = Math.floor, v0 = String.fromCharCode;
function Cu(u) {
  throw new RangeError(ma[u]);
}
function ga(u, e) {
  const t = [];
  let r = u.length;
  for (; r--; )
    t[r] = e(u[r]);
  return t;
}
function Jr(u, e) {
  const t = u.split("@");
  let r = "";
  t.length > 1 && (r = t[0] + "@", u = t[1]), u = u.replace(xa, ".");
  const n = u.split("."), i = ga(n, e).join(".");
  return r + i;
}
function Yr(u) {
  const e = [];
  let t = 0;
  const r = u.length;
  for (; t < r; ) {
    const n = u.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      const i = u.charCodeAt(t++);
      (i & 64512) == 56320 ? e.push(((n & 1023) << 10) + (i & 1023) + 65536) : (e.push(n), t--);
    } else
      e.push(n);
  }
  return e;
}
const ka = (u) => String.fromCodePoint(...u), va = function(u) {
  return u >= 48 && u < 58 ? 26 + (u - 48) : u >= 65 && u < 91 ? u - 65 : u >= 97 && u < 123 ? u - 97 : lu;
}, Vt = function(u, e) {
  return u + 22 + 75 * (u < 26) - ((e != 0) << 5);
}, Kr = function(u, e, t) {
  let r = 0;
  for (u = t ? fu(u / ba) : u >> 1, u += fu(u / e); u > k0 * ke >> 1; r += lu)
    u = fu(u / k0);
  return fu(r + (k0 + 1) * u / (u + ha));
}, Qr = function(u) {
  const e = [], t = u.length;
  let r = 0, n = Gr, i = Vr, c = u.lastIndexOf(Wr);
  c < 0 && (c = 0);
  for (let o = 0; o < c; ++o)
    u.charCodeAt(o) >= 128 && Cu("not-basic"), e.push(u.charCodeAt(o));
  for (let o = c > 0 ? c + 1 : 0; o < t; ) {
    const a = r;
    for (let l = 1, f = lu; ; f += lu) {
      o >= t && Cu("invalid-input");
      const h = va(u.charCodeAt(o++));
      h >= lu && Cu("invalid-input"), h > fu((Gu - r) / l) && Cu("overflow"), r += h * l;
      const b = f <= i ? et : f >= i + ke ? ke : f - i;
      if (h < b)
        break;
      const d = lu - b;
      l > fu(Gu / d) && Cu("overflow"), l *= d;
    }
    const s = e.length + 1;
    i = Kr(r - a, s, a == 0), fu(r / s) > Gu - n && Cu("overflow"), n += fu(r / s), r %= s, e.splice(r++, 0, n);
  }
  return String.fromCodePoint(...e);
}, Xr = function(u) {
  const e = [];
  u = Yr(u);
  const t = u.length;
  let r = Gr, n = 0, i = Vr;
  for (const a of u)
    a < 128 && e.push(v0(a));
  const c = e.length;
  let o = c;
  for (c && e.push(Wr); o < t; ) {
    let a = Gu;
    for (const l of u)
      l >= r && l < a && (a = l);
    const s = o + 1;
    a - r > fu((Gu - n) / s) && Cu("overflow"), n += (a - r) * s, r = a;
    for (const l of u)
      if (l < r && ++n > Gu && Cu("overflow"), l === r) {
        let f = n;
        for (let h = lu; ; h += lu) {
          const b = h <= i ? et : h >= i + ke ? ke : h - i;
          if (f < b)
            break;
          const d = f - b, g = lu - b;
          e.push(
            v0(Vt(b + d % g, 0))
          ), f = fu(d / g);
        }
        e.push(v0(Vt(f, 0))), i = Kr(n, s, o === c), n = 0, ++o;
      }
    ++n, ++r;
  }
  return e.join("");
}, ya = function(u) {
  return Jr(u, function(e) {
    return pa.test(e) ? Qr(e.slice(4).toLowerCase()) : e;
  });
}, Ea = function(u) {
  return Jr(u, function(e) {
    return _a.test(e) ? "xn--" + Xr(e) : e;
  });
}, un = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: Yr,
    encode: ka
  },
  decode: Qr,
  encode: Xr,
  toASCII: Ea,
  toUnicode: ya
}, Da = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, Ca = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, Aa = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, Fa = {
  default: Da,
  zero: Ca,
  commonmark: Aa
}, wa = /^(vbscript|javascript|file|data):/, Sa = /^data:image\/(gif|png|jpeg|webp);/;
function $a(u) {
  const e = u.trim().toLowerCase();
  return wa.test(e) ? Sa.test(e) : !0;
}
const en = ["http:", "https:", "mailto:"];
function Ta(u) {
  const e = J0(u, !0);
  if (e.hostname && (!e.protocol || en.indexOf(e.protocol) >= 0))
    try {
      e.hostname = un.toASCII(e.hostname);
    } catch {
    }
  return Ee(W0(e));
}
function Ia(u) {
  const e = J0(u, !0);
  if (e.hostname && (!e.protocol || en.indexOf(e.protocol) >= 0))
    try {
      e.hostname = un.toUnicode(e.hostname);
    } catch {
    }
  return Ju(W0(e), Ju.defaultChars + "%");
}
function uu(u, e) {
  if (!(this instanceof uu))
    return new uu(u, e);
  e || K0(u) || (e = u || {}, u = "default"), this.inline = new Ce(), this.block = new i0(), this.core = new X0(), this.renderer = new ee(), this.linkify = new Y(), this.validateLink = $a, this.normalizeLink = Ta, this.normalizeLinkText = Ia, this.utils = Mc, this.helpers = r0({}, Lc), this.options = {}, this.configure(u), e && this.set(e);
}
uu.prototype.set = function(u) {
  return r0(this.options, u), this;
};
uu.prototype.configure = function(u) {
  const e = this;
  if (K0(u)) {
    const t = u;
    if (u = Fa[t], !u)
      throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
  }
  if (!u)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return u.options && e.set(u.options), u.components && Object.keys(u.components).forEach(function(t) {
    u.components[t].rules && e[t].ruler.enableOnly(u.components[t].rules), u.components[t].rules2 && e[t].ruler2.enableOnly(u.components[t].rules2);
  }), this;
};
uu.prototype.enable = function(u, e) {
  let t = [];
  Array.isArray(u) || (u = [u]), ["core", "block", "inline"].forEach(function(n) {
    t = t.concat(this[n].ruler.enable(u, !0));
  }, this), t = t.concat(this.inline.ruler2.enable(u, !0));
  const r = u.filter(function(n) {
    return t.indexOf(n) < 0;
  });
  if (r.length && !e)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
  return this;
};
uu.prototype.disable = function(u, e) {
  let t = [];
  Array.isArray(u) || (u = [u]), ["core", "block", "inline"].forEach(function(n) {
    t = t.concat(this[n].ruler.disable(u, !0));
  }, this), t = t.concat(this.inline.ruler2.disable(u, !0));
  const r = u.filter(function(n) {
    return t.indexOf(n) < 0;
  });
  if (r.length && !e)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
  return this;
};
uu.prototype.use = function(u) {
  const e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return u.apply(u, e), this;
};
uu.prototype.parse = function(u, e) {
  if (typeof u != "string")
    throw new Error("Input data should be a String");
  const t = new this.core.State(u, this, e);
  return this.core.process(t), t.tokens;
};
uu.prototype.render = function(u, e) {
  return e = e || {}, this.renderer.render(this.parse(u, e), this.options, e);
};
uu.prototype.parseInline = function(u, e) {
  const t = new this.core.State(u, this, e);
  return t.inlineMode = !0, this.core.process(t), t.tokens;
};
uu.prototype.renderInline = function(u, e) {
  return e = e || {}, this.renderer.render(this.parseInline(u, e), this.options, e);
};
var Ma = /* @__PURE__ */ Ou('<img class="h-7 rounded-sm">'), Ba = /* @__PURE__ */ Ou('<div class="text-gray-300 text-base grid h-full grid-cols-1 place-content-center text-center"> </div>'), Ra = /* @__PURE__ */ Ou('<div class="flex justify-end mb-3"><div class="text-white rounded-lg py-2 px-4 max-w-[70%]" style="background: #6726aa;"> </div></div>'), za = /* @__PURE__ */ Ou('<div class="flex mb-3"><div class="bg-white shadow-xl text-black rounded-lg py-2 px-4 max-w-[70%]"><!></div></div>'), La = /* @__PURE__ */ Ou("<!> <!>", 1), qa = /* @__PURE__ */ Ou('<div class="flex mb-3"><div class="bg-white shadow-xl text-black rounded-lg py-2 px-4 max-w-[70%]"><div class="container_bounce"><div class="ball ball1"></div> <div class="ball ball2"></div> <div class="ball ball3"></div></div></div></div>'), Pa = /* @__PURE__ */ Ou('<div id="chat-widget-container"><div id="chat-bubble" class="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer text-3xl shadow-xl"><span><svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg></span> <span><svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></span></div> <div id="chat-popup"><div id="chat-header" class="flex justify-between items-center p-4 text-white rounded-t-md"><h5 class="m-0 text-md flex items-center"><!> <span class="pl-2"> </span></h5> <button id="close-popup" class="bg-transparent border-none text-white cursor-pointer  lg:invisible"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div id="chat-messages" class="flex-1 p-4 overflow-y-auto"><!> <!> <!></div> <div id="chat-input-container" class="p-4 border-t border-gray-200"><div class="flex space-x-2 items-center"><input type="text" id="chat-input" class="flex-1 border border-gray-300 rounded-md px-4 py-3 outline-none w-3/4" placeholder="Type your message..."> <button id="chat-submit" class="bg-purple-600 text-white rounded-full p-2.5 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button></div> <div class="flex text-center text-xs pt-2" style="font-size: .65rem;"><span class="flex-1">Powered by <a href="https://gen.ai.kku.ac.th/" target="_blank" class="text-indigo-600">KKU IntelSphere</a></span></div></div></div></div>');
function tn(u, e) {
  Dr(e, !1);
  const t = /* @__PURE__ */ tu(), r = /* @__PURE__ */ tu();
  let n = Ft(e, "apiKey", 12, ""), i = Ft(e, "initialMessage", 12, ""), c = /* @__PURE__ */ tu(!1), o = /* @__PURE__ */ tu(), a, s, l = /* @__PURE__ */ tu({}), f = /* @__PURE__ */ tu(!1), h = /* @__PURE__ */ tu(!1), b = /* @__PURE__ */ tu([]);
  Ri(async () => {
    try {
      const m = await fetch("https://gen.ai.kku.ac.th/api/v1/public/get-mysphere-kku-knowledge-by-uuid", {
        method: "POST",
        body: JSON.stringify({ id: n() }),
        headers: { "content-type": "application/json" }
      });
      T(l, await m.json()), E(l).id && T(f, !0);
    } catch (m) {
      console.log(m);
    }
    s = Vi(), i() && T(b, [
      ...E(b),
      { type: "bot", message: i() }
    ]);
  });
  const d = (m) => uu("commonmark").render(m), g = (m) => {
    const D = () => m.scroll({ top: m.scrollHeight, behavior: "smooth" });
    return D(), { update: D };
  };
  async function v() {
    if (E(o) && E(c)) {
      a = E(o), T(o, ""), T(h, !0), T(b, [
        ...E(b),
        { type: "me", message: a }
      ]);
      const m = p(12);
      try {
        let w = await (await fetch("https://gen.ai.kku.ac.th/api/v1/public/chat/completion", {
          body: JSON.stringify({
            message: a,
            sessionId: s,
            model: "kku-knowledge",
            uuidMessage: m,
            mySphereId: E(l).uuid
          }),
          method: "POST",
          headers: { "Content-Type": "application/json" }
        })).json();
        console.log(w), w.ok && (T(b, [
          ...E(b),
          {
            id: m,
            type: "bot",
            message: w.content
          }
        ]), T(h, !1));
      } catch (D) {
        console.error(D);
      }
    }
  }
  async function k(m) {
    m.key === "Enter" && E(c) && (m.preventDefault(), v());
  }
  function p(m) {
    let D = "";
    const w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", q = w.length;
    let G = 0;
    for (; G < m; )
      D += w.charAt(Math.floor(Math.random() * q)), G += 1;
    return D;
  }
  pt(() => E(b), () => {
    T(t, E(b));
  }), pt(() => {
  }, () => {
    T(r, 0);
  }), Kn(), Bi();
  var x = _i(), y = bt(x);
  {
    var _ = (m) => {
      var D = Pa(), w = H(D), q = H(w);
      let G;
      var te = ou(q, 2);
      let Ae;
      U(w);
      var re = ou(w, 2);
      let ne;
      var cu = H(re), ie = H(cu), tt = H(ie);
      {
        var rn = (M) => {
          var z = Ma();
          ae(() => {
            Ve(z, "src", E(l).image), Ve(z, "alt", E(l).title);
          }), xu(M, z);
        };
        Uu(tt, (M) => {
          E(l).image && M(rn);
        });
      }
      var rt = ou(tt, 2), nn = H(rt, !0);
      U(rt), U(ie);
      var cn = ou(ie, 2);
      U(cu);
      var Fe = ou(cu, 2), nt = H(Fe);
      {
        var on = (M) => {
          var z = Ba(), Nu = H(z, !0);
          U(z), ae(() => f0(Nu, E(l).description)), xu(M, z);
        };
        Uu(nt, (M) => {
          E(b).length == 0 && M(on);
        });
      }
      var it = ou(nt, 2);
      vi(it, 1, () => E(b), gi, (M, z) => {
        var Nu = La(), at = bt(Nu);
        {
          var fn = (Mu) => {
            var Bu = Ra(), oe = H(Bu), o0 = H(oe, !0);
            U(oe), U(Bu), ae(() => f0(o0, E(z).message)), xu(Mu, Bu);
          };
          Uu(at, (Mu) => {
            E(z).type == "me" && Mu(fn);
          });
        }
        var dn = ou(at, 2);
        {
          var hn = (Mu) => {
            var Bu = za(), oe = H(Bu), o0 = H(oe);
            Di(o0, () => d(E(z).message)), U(oe), U(Bu), xu(Mu, Bu);
          };
          Uu(dn, (Mu) => {
            E(z).type == "bot" && Mu(hn);
          });
        }
        xu(M, Nu);
      });
      var an = ou(it, 2);
      {
        var sn = (M) => {
          var z = qa();
          xu(M, z);
        };
        Uu(an, (M) => {
          E(h) && M(sn);
        });
      }
      U(Fe), Ci(Fe, (M, z) => g == null ? void 0 : g(M), () => E(t));
      var ct = ou(Fe, 2), ot = H(ct), ce = H(ot);
      Si(ce);
      var ln = ou(ce, 2);
      U(ot), Zn(2), U(ct), U(re), U(D), ae(
        (M, z, Nu) => {
          G = d0(q, 1, "widget__icon widget__icon_1", null, G, M), Ae = d0(te, 1, "widget__icon", null, Ae, z), ne = d0(re, 1, "absolute bottom-20 right-0 w-96 bg-white rounded-md shadow-md flex flex-col transition-all text-sm", null, ne, Nu), f0(nn, E(l).title), ce.disabled = E(h);
        },
        [
          () => ({ widget__hidden: E(c) }),
          () => ({ widget__hidden: !E(c) }),
          () => ({ hidden: !E(c) })
        ],
        N0
      ), we("click", w, () => {
        T(c, !E(c));
      }), we("click", cn, () => {
        T(c, !1);
      }), Ii(ce, () => E(o), (M) => T(o, M)), we("keydown", ce, k), we("click", ln, () => {
        v();
      }), xu(m, D);
    };
    Uu(y, (m) => {
      E(f) && m(_);
    });
  }
  return Mi("innerHeight", (m) => T(r, m)), xu(u, x), Cr({
    get apiKey() {
      return n();
    },
    set apiKey(m) {
      n(m), A0();
    },
    get initialMessage() {
      return i();
    },
    set initialMessage(m) {
      i(m), A0();
    }
  });
}
Ni(tn, { apiKey: {}, initialMessage: {} }, [], [], !0);
class Oa extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._props = {
      apiKey: this.getAttribute("api-key") || "",
      initialMessage: this.getAttribute("initial-message") || void 0
      // Pass undefined if not set
      //themeColor: this.getAttribute('theme-color') || undefined, // Pass undefined if not set
    };
  }
  connectedCallback() {
    const e = document.createElement("style");
    e.textContent = `
            @import 'https://gen.ai.kku.ac.th/assets/css/tailwind.min.css';
            :host {
                /* Define CSS variables scoped to the custom element */
                ${this.getAttribute("theme-color") ? `--chat-widget-theme-color: ${this.getAttribute("theme-color")};` : ""}
                ${this.getAttribute("font-family") ? `--chat-widget-font-family: ${this.getAttribute("font-family")};` : ""}
            }
            .hidden {
                display: none;
            }
            .widget__icon {
                cursor: pointer;
                width: 60%;
                position: absolute;
                top: 18px;
                left: 18px;
                transition: transform 0.3s ease;
                transform: scale(1);
            }
            .widget__icon_1 {
                top: 12px;
                left: 12px;
            }
            .widget__hidden {
                transform: scale(0);
            }
            @keyframes pulse {
                0% {
                transform: scale(0);
                }
                50% {
                transform: scale(1.1);
                }
                100% {
                transform: scale(1);
                }
            }
            #chat-widget-container {
                font-family: Helvetica, Arial, sans-serif;
                position: fixed;
                bottom: 20px;
                right: 20px;
                flex-direction: column;
                z-index: 2147483647;
            }
            #chat-bubble{
                transition: transform .3s ease !important;
                animation: pulse 1.5s;
            }
            #chat-popup {
                height: 80vh;
                max-height: 80vh;
                transition: all 0.3s;
                overflow: hidden;
                background-color: rgb(248, 248, 248);
            }
            @media (max-width: 768px) {
                #chat-popup {
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                max-height: 100%;
                border-radius: 0;
                }
            }
            #chat-header, #chat-bubble{
                background-color: transparent;
                background-image: -webkit-linear-gradient(61deg, #1B0F3A 0%, #4F2179 100%);
                background-image: -moz-linear-gradient(61deg, #1B0F3A 0%, #4F2179 100%);
                background-image: -ms-linear-gradient(61deg, #1B0F3A 0%, #4F2179 100%);
                background-image: -o-linear-gradient(61deg, #1B0F3A 0%, #4F2179 100%);
                background-image: linear-gradient(61deg, #1B0F3A 0%, #4F2179 100%);
            }

            .container_bounce { 
                padding: 5px;
                display: flex;
                width: auto;
                justify-content: space-between;
                height: 17px;
                align-items: flex-end
            }
            .ball {
                width: 7px;
                height: 7px;
                margin: 0 2px;
                background: #333;
                border-radius: 50%;
                animation: bounce 1.2s infinite ease-in-out;

            }
            .ball2 {
                animation-delay: 0.2s
            }
            .ball3 {
                animation-delay: 0.4s
            }
            
            @keyframes bounce {
                0% {transform: translate(0,0);}
                25% {transform: translate(0,-10px);background:#ccc;}
                40% {transform: translate(0,3px);}
                50% {transform: translate(0,0px);}
            }
        `, this.shadowRoot.appendChild(e), G0(tn, {
      // @ts-ignore
      target: this.shadowRoot,
      props: this._props
    });
  }
  // Optional: Observe attribute changes if props need to be reactive
  // static get observedAttributes() {
  //     return ['api-key', 'initial-message', 'theme-color'];
  // }
  // attributeChangedCallback(name, oldValue, newValue) {
  //     // Handle attribute changes here if needed, potentially re-rendering
  //     // or updating the Svelte component's props. This can be complex.
  //     console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
  //     // For simplicity, we often rely on initial attributes in connectedCallback
  // }
  disconnectedCallback() {
    console.log("Chat widget removed from DOM");
  }
}
customElements.get("chat-widget-embed") || customElements.define("chat-widget-embed", Oa);
export {
  Oa as default
};
