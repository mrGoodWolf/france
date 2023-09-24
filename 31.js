(window.odspNextWebpackJsonp = window.odspNextWebpackJsonp || []).push([[31], {
    667: function(e, t, n) {
        var a, i, r, o, s;
        (a || (a = {})).version = "2.9.0",
        function(e) {
            !function(e) {
                e[e.BT_STOP = 0] = "BT_STOP",
                e[e.BT_STOP_BASE = 1] = "BT_STOP_BASE",
                e[e.BT_BOOL = 2] = "BT_BOOL",
                e[e.BT_UINT8 = 3] = "BT_UINT8",
                e[e.BT_UINT16 = 4] = "BT_UINT16",
                e[e.BT_UINT32 = 5] = "BT_UINT32",
                e[e.BT_UINT64 = 6] = "BT_UINT64",
                e[e.BT_FLOAT = 7] = "BT_FLOAT",
                e[e.BT_DOUBLE = 8] = "BT_DOUBLE",
                e[e.BT_STRING = 9] = "BT_STRING",
                e[e.BT_STRUCT = 10] = "BT_STRUCT",
                e[e.BT_LIST = 11] = "BT_LIST",
                e[e.BT_SET = 12] = "BT_SET",
                e[e.BT_MAP = 13] = "BT_MAP",
                e[e.BT_INT8 = 14] = "BT_INT8",
                e[e.BT_INT16 = 15] = "BT_INT16",
                e[e.BT_INT32 = 16] = "BT_INT32",
                e[e.BT_INT64 = 17] = "BT_INT64",
                e[e.BT_WSTRING = 18] = "BT_WSTRING",
                e[e.BT_UNAVAILABLE = 127] = "BT_UNAVAILABLE"
            }(e.BondDataType || (e.BondDataType = {})),
            function(e) {
                e[e.MARSHALED_PROTOCOL = 0] = "MARSHALED_PROTOCOL",
                e[e.MAFIA_PROTOCOL = 17997] = "MAFIA_PROTOCOL",
                e[e.COMPACT_PROTOCOL = 16963] = "COMPACT_PROTOCOL",
                e[e.JSON_PROTOCOL = 21322] = "JSON_PROTOCOL",
                e[e.PRETTY_JSON_PROTOCOL = 20554] = "PRETTY_JSON_PROTOCOL",
                e[e.SIMPLE_PROTOCOL = 20563] = "SIMPLE_PROTOCOL"
            }(e.ProtocolType || (e.ProtocolType = {}))
        }((s = i || (i = {})).Bond || (s.Bond = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    var t = function() {
                        function e() {
                            this._buffer = []
                        }
                        return e.prototype.Add = function(e) {
                            for (var t = 0; t < this._buffer.length && this._buffer[t] != e; ++t)
                                ;
                            t == this._buffer.length && this._buffer.push(e)
                        }
                        ,
                        e.prototype.Count = function() {
                            return this._buffer.length
                        }
                        ,
                        e.prototype.GetBuffer = function() {
                            return this._buffer
                        }
                        ,
                        e
                    }();
                    e.Set = t;
                    var n = function() {
                        function e() {
                            this._buffer = []
                        }
                        return e.prototype.Add = function(e, t) {
                            -1 == this._getIndex(e) && this._buffer.push({
                                Key: e,
                                Value: t
                            })
                        }
                        ,
                        e.prototype.AddOrReplace = function(e, t) {
                            var n = this._getIndex(e);
                            n >= 0 ? this._buffer[n] = {
                                Key: e,
                                Value: t
                            } : this._buffer.push({
                                Key: e,
                                Value: t
                            })
                        }
                        ,
                        e.prototype.Remove = function(e) {
                            var t = this._getIndex(e);
                            t >= 0 && this._buffer.splice(t, 1)
                        }
                        ,
                        e.prototype.Count = function() {
                            return this._buffer.length
                        }
                        ,
                        e.prototype.GetBuffer = function() {
                            return this._buffer
                        }
                        ,
                        e.prototype.ContainsKey = function(e) {
                            return this._getIndex(e) >= 0
                        }
                        ,
                        e.prototype.Get = function(e) {
                            var t = this._getIndex(e);
                            return t >= 0 ? this._buffer[t].Value : null
                        }
                        ,
                        e.prototype._getIndex = function(e) {
                            for (var t = 0, n = -1; t < this._buffer.length; ++t)
                                if (this._buffer[t].Key == e) {
                                    n = t;
                                    break
                                }
                            return n
                        }
                        ,
                        e
                    }();
                    e.Map = n
                }(e.Collections || (e.Collections = {}))
            }(e.Bond || (e.Bond = {}))
        }(i || (i = {})),
        function(e) {
            !function(t) {
                !function(e) {
                    var a = function() {
                        function e() {}
                        return e.GetBytes = function(e) {
                            for (var t = [], n = 0; n < e.length; ++n) {
                                var a = e.charCodeAt(n);
                                a < 128 ? t.push(a) : a < 2048 ? t.push(192 | a >> 6, 128 | 63 & a) : a < 55296 || a >= 57344 ? t.push(224 | a >> 12, 128 | a >> 6 & 63, 128 | 63 & a) : (a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(++n)),
                                t.push(240 | a >> 18, 128 | a >> 12 & 63, 128 | a >> 6 & 63, 128 | 63 & a))
                            }
                            return t
                        }
                        ,
                        e
                    }();
                    e.Utf8 = a;
                    var i = function() {
                        function e() {}
                        return e.GetString = function(e) {
                            var t, n, a, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = [], o = e.length % 3, s = function(e) {
                                return [i.charAt(e >> 18 & 63), i.charAt(e >> 12 & 63), i.charAt(e >> 6 & 63), i.charAt(63 & e)].join("")
                            };
                            for (t = 0,
                            a = e.length - o; t < a; t += 3)
                                n = (e[t] << 16) + (e[t + 1] << 8) + e[t + 2],
                                r.push(s(n));
                            switch (o) {
                            case 1:
                                n = e[e.length - 1],
                                r.push(i.charAt(n >> 2)),
                                r.push(i.charAt(n << 4 & 63)),
                                r.push("==");
                                break;
                            case 2:
                                n = (e[e.length - 2] << 8) + e[e.length - 1],
                                r.push(i.charAt(n >> 10)),
                                r.push(i.charAt(n >> 4 & 63)),
                                r.push(i.charAt(n << 2 & 63)),
                                r.push("=")
                            }
                            return r.join("")
                        }
                        ,
                        e
                    }();
                    e.Base64 = i;
                    var r = function() {
                        function e() {}
                        return e.GetBytes = function(e) {
                            for (var t = []; 4294967168 & e; )
                                t.push(127 & e | 128),
                                e >>>= 7;
                            return t.push(127 & e),
                            t
                        }
                        ,
                        e
                    }();
                    e.Varint = r;
                    var o = function() {
                        function e() {}
                        return e.GetBytes = function(e) {
                            for (var t = e.low, n = e.high, a = []; n || 4294967168 & t; )
                                a.push(127 & t | 128),
                                t = (127 & n) << 25 | t >>> 7,
                                n >>>= 7;
                            return a.push(127 & t),
                            a
                        }
                        ,
                        e
                    }();
                    e.Varint64 = o;
                    var s = function() {
                        function e() {}
                        return e.GetBytes = function(e) {
                            if (t.BrowserChecker.IsDataViewSupport()) {
                                var a = new DataView(new ArrayBuffer(4));
                                a.setFloat32(0, e, !0);
                                for (var i = [], r = 0; r < 4; ++r)
                                    i.push(a.getUint8(r));
                                return i
                            }
                            return n.ConvertNumberToArray(e, !1)
                        }
                        ,
                        e
                    }();
                    e.Float = s;
                    var c = function() {
                        function e() {}
                        return e.GetBytes = function(e) {
                            if (t.BrowserChecker.IsDataViewSupport()) {
                                var a = new DataView(new ArrayBuffer(8));
                                a.setFloat64(0, e, !0);
                                for (var i = [], r = 0; r < 8; ++r)
                                    i.push(a.getUint8(r));
                                return i
                            }
                            return n.ConvertNumberToArray(e, !0)
                        }
                        ,
                        e
                    }();
                    e.Double = c;
                    var d = function() {
                        function e() {}
                        return e.EncodeZigzag16 = function(e) {
                            return (e = t.Number.ToInt16(e)) << 1 ^ e >> 15
                        }
                        ,
                        e.EncodeZigzag32 = function(e) {
                            return (e = t.Number.ToInt32(e)) << 1 ^ e >> 31
                        }
                        ,
                        e.EncodeZigzag64 = function(e) {
                            var n = e.low
                              , a = e.high
                              , i = a << 1 | n >>> 31
                              , r = n << 1;
                            2147483648 & a && (i = ~i,
                            r = ~r);
                            var o = new t.UInt64("0");
                            return o.low = r,
                            o.high = i,
                            o
                        }
                        ,
                        e
                    }();
                    e.Zigzag = d
                }(t.Encoding || (t.Encoding = {})),
                function(a) {
                    var i = function() {
                        function e() {}
                        return e.GetString = function(e) {
                            for (var t = [], n = 0; n < e.length; ++n) {
                                var a = e[n];
                                if (a <= 191)
                                    t.push(String.fromCharCode(a));
                                else if (a <= 223) {
                                    var i = e[++n];
                                    t.push(String.fromCharCode((31 & a) << 6 | 63 & i))
                                } else if (a <= 239) {
                                    i = e[++n];
                                    var r = e[++n];
                                    t.push(String.fromCharCode((15 & a) << 12 | (63 & i) << 6 | 63 & r))
                                } else
                                    a = (7 & a) << 18 | (63 & (i = e[++n])) << 12 | (63 & (r = e[++n])) << 6 | 63 & e[++n],
                                    a -= 65536,
                                    t.push(String.fromCharCode(55296 | a >> 10 & 1023)),
                                    t.push(String.fromCharCode(56320 | 1023 & a))
                            }
                            return t.join("")
                        }
                        ,
                        e
                    }();
                    a.Utf8 = i;
                    var r = function() {
                        function e() {}
                        return e.GetBytes = function(e) {
                            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = [], a = 0; a < e.length; ++a) {
                                var i = t.indexOf(e.charAt(a++))
                                  , r = t.indexOf(e.charAt(a++))
                                  , o = t.indexOf(e.charAt(a++))
                                  , s = t.indexOf(e.charAt(a));
                                n.push(i << 2 | r >> 4),
                                o >= 0 && (n.push(r << 4 & 240 | o >> 2),
                                s >= 0 && n.push(o << 6 & 192 | s))
                            }
                            return n
                        }
                        ,
                        e
                    }();
                    a.Base64 = r;
                    var o = function() {
                        function t() {}
                        return t.GetInt64 = function(t) {
                            var n = new e.Bond.Int64("0")
                              , a = this._Read(t);
                            return n.low = a[0],
                            a.length > 1 && (n.high = a[1]),
                            n
                        }
                        ,
                        t.GetNumber = function(e) {
                            return this._Read(e)[0]
                        }
                        ,
                        t._Read = function(e) {
                            for (var t = [], n = 0, a = !0, i = 0; a; ) {
                                if (a = 0 != (128 & (r = e.shift())),
                                r &= 127,
                                !(i < 28)) {
                                    n |= r << i,
                                    t.push(n),
                                    n = r >> 4,
                                    i = 3;
                                    break
                                }
                                n |= r << i,
                                i += 7
                            }
                            for (; a; ) {
                                var r;
                                if (a = 0 != (128 & (r = e.shift())),
                                n |= (r &= 127) << i,
                                (i += 7) >= 32)
                                    break
                            }
                            return t.push(n),
                            t
                        }
                        ,
                        t
                    }();
                    a.Varint = o;
                    var s = function() {
                        function e() {}
                        return e.GetNumber = function(e) {
                            if (t.BrowserChecker.IsDataViewSupport()) {
                                for (var a = new DataView(new ArrayBuffer(4)), i = 0; i < 4; ++i)
                                    a.setUint8(i, e[i]);
                                return a.getFloat32(0, !0)
                            }
                            return n.ConvertArrayToNumber(e, !1)
                        }
                        ,
                        e
                    }();
                    a.Float = s;
                    var c = function() {
                        function e() {}
                        return e.GetNumber = function(e) {
                            if (t.BrowserChecker.IsDataViewSupport()) {
                                for (var a = new DataView(new ArrayBuffer(8)), i = 0; i < 8; ++i)
                                    a.setUint8(i, e[i]);
                                return a.getFloat64(0, !0)
                            }
                            return n.ConvertArrayToNumber(e, !0)
                        }
                        ,
                        e
                    }();
                    a.Double = c;
                    var d = function() {
                        function t() {}
                        return t.DecodeZigzag16 = function(e) {
                            return ((65535 & e) >>> 1 ^ -(1 & e)) << 16 >> 16
                        }
                        ,
                        t.DecodeZigzag32 = function(e) {
                            return e >>> 1 ^ -(1 & e)
                        }
                        ,
                        t.DecodeZigzag64 = function(t) {
                            var n = 1 & t.high
                              , a = t.high >>> 1
                              , i = 1 & t.low
                              , r = t.low >>> 1;
                            r |= n << 31,
                            i && (r ^= 4294967295,
                            a ^= 4294967295);
                            var o = new e.Bond.UInt64("0");
                            return o.low = r,
                            o.high = a,
                            o
                        }
                        ,
                        t
                    }();
                    a.Zigzag = d
                }(t.Decoding || (t.Decoding = {}));
                var n = function() {
                    function e() {}
                    return e.ConvertNumberToArray = function(e, t) {
                        if (!e)
                            return t ? this._doubleZero : this._floatZero;
                        var n = t ? 52 : 23
                          , a = (1 << (t ? 11 : 8) - 1) - 1
                          , i = 1 - a
                          , r = a
                          , o = e < 0 ? 1 : 0;
                        e = Math.abs(e);
                        for (var s = Math.floor(e), c = e - s, d = 2 * (a + 2) + n, l = new Array(d), u = 0; u < d; )
                            l[u++] = 0;
                        for (u = a + 2; u && s; )
                            l[--u] = s % 2,
                            s = Math.floor(s / 2);
                        for (u = a + 1; u < d - 1 && c > 0; )
                            (c *= 2) >= 1 ? (l[++u] = 1,
                            --c) : l[++u] = 0;
                        for (var f = 0; f < d && !l[f]; ++f)
                            ;
                        var p = a + 1 - f
                          , m = f + n;
                        if (l[m + 1]) {
                            for (u = m; u > f && !(l[u] = 1 - l[u]); --u)
                                ;
                            u == f && ++p
                        }
                        if (p > r || s)
                            return o ? t ? this._doubleNegInifinity : this._floatNegInifinity : t ? this._doubleInifinity : this._floatInifinity;
                        if (p < i)
                            return t ? this._doubleZero : this._floatZero;
                        if (t) {
                            var _ = 0;
                            for (u = 0; u < 20; ++u)
                                _ = _ << 1 | l[++f];
                            for (var h = 0; u < 52; ++u)
                                h = h << 1 | l[++f];
                            return [255 & h, h >> 8 & 255, h >> 16 & 255, h >>> 24, 255 & (_ = o << 31 | 2147483647 & (_ |= p + a << 20)), _ >> 8 & 255, _ >> 16 & 255, _ >>> 24]
                        }
                        var b = 0;
                        for (u = 0; u < 23; ++u)
                            b = b << 1 | l[++f];
                        return [255 & (b = o << 31 | 2147483647 & (b |= p + a << 23)), b >> 8 & 255, b >> 16 & 255, b >>> 24]
                    }
                    ,
                    e.ConvertArrayToNumber = function(e, n) {
                        var a = (1 << (n ? 11 : 8) - 1) - 1
                          , i = 0 != (128 & e[n ? 7 : 3])
                          , r = n ? (127 & e[7]) << 4 | (240 & e[6]) >> 4 : (127 & e[3]) << 1 | (128 & e[2]) >> 7;
                        if (255 == r)
                            throw new t.Exception("Not a valid float/double buffer.");
                        var o = 1
                          , s = 1;
                        if (n) {
                            var c = (15 & e[6]) << 28 | (255 & e[5]) << 20 | (255 & e[4]) << 12
                              , d = e[3] << 24 | (255 & e[2]) << 16 | (255 & e[1]) << 8 | 255 & e[0];
                            if (!r && !c && !d)
                                return 0;
                            for (var l = 0; l < 20; ++l)
                                s /= 2,
                                c < 0 && (o += s),
                                c <<= 1;
                            for (l = 0; l < 32; ++l)
                                s /= 2,
                                d < 0 && (o += s),
                                d <<= 1
                        } else {
                            var u = (127 & e[2]) << 25 | (255 & e[1]) << 17 | (255 & e[0]) << 9;
                            if (!r && !u)
                                return 0;
                            for (l = 0; l < 23; ++l)
                                s /= 2,
                                u < 0 && (o += s),
                                u <<= 1
                        }
                        return o *= Math.pow(2, r - a),
                        i ? 0 - o : o
                    }
                    ,
                    e
                }();
                n._floatZero = [0, 0, 0, 0],
                n._doubleZero = [0, 0, 0, 0, 0, 0, 0, 0],
                n._floatInifinity = [0, 0, 128, 127],
                n._floatNegInifinity = [0, 0, 128, 255],
                n._doubleInifinity = [0, 0, 0, 0, 0, 0, 240, 127],
                n._doubleNegInifinity = [0, 0, 0, 0, 0, 0, 240, 255]
            }(e.Bond || (e.Bond = {}))
        }(i || (i = {})),
        function(e) {
            !function(e) {
                var t, n;
                t = e.IO || (e.IO = {}),
                n = function() {
                    function t() {
                        this._buffer = []
                    }
                    return t.prototype.WriteByte = function(t) {
                        this._buffer.push(e.Number.ToByte(t))
                    }
                    ,
                    t.prototype.Write = function(e, t, n) {
                        for (; n--; )
                            this.WriteByte(e[t++])
                    }
                    ,
                    t.prototype.GetBuffer = function() {
                        return this._buffer
                    }
                    ,
                    t
                }(),
                t.MemoryStream = n
            }(e.Bond || (e.Bond = {}))
        }(i || (i = {})),
        function(e) {
            !function(e) {
                e.FieldTag = function(e, t) {
                    this.Type = e,
                    this.Id = t
                }
                ,
                e.ContainerTag = function(e, t) {
                    this.ElementType = e,
                    this.Size = t
                }
                ,
                e.KeyValueContainerTag = function(e, t, n) {
                    this.KeyType = e,
                    this.ValueType = t,
                    this.Size = n
                }
                ,
                e.Bonded = function() {}
                ;
                var t = function() {
                    function e(e) {
                        this.low = 0,
                        this.high = 0,
                        this.low = parseInt(e),
                        this.low < 0 && (this.high = -1)
                    }
                    return e.prototype.Equals = function(t) {
                        var n = new e(t);
                        return this.low == n.low && this.high == n.high
                    }
                    ,
                    e
                }();
                e.Int64 = t;
                var n = function() {
                    function e(e) {
                        this.low = 0,
                        this.high = 0,
                        this.low = parseInt(e)
                    }
                    return e.prototype.Equals = function(t) {
                        var n = new e(t);
                        return this.low == n.low && this.high == n.high
                    }
                    ,
                    e
                }();
                e.UInt64 = n;
                var a = function() {
                    function e() {}
                    return e.ToByte = function(e) {
                        return this.ToUInt8(e)
                    }
                    ,
                    e.ToInt8 = function(e) {
                        return 127 & e | (128 & e) << 24 >> 24
                    }
                    ,
                    e.ToInt16 = function(e) {
                        return 32767 & e | (32768 & e) << 16 >> 16
                    }
                    ,
                    e.ToInt32 = function(e) {
                        return 2147483647 & e | 2147483648 & e
                    }
                    ,
                    e.ToUInt8 = function(e) {
                        return 255 & e
                    }
                    ,
                    e.ToUInt16 = function(e) {
                        return 65535 & e
                    }
                    ,
                    e.ToUInt32 = function(e) {
                        return 4294967295 & e
                    }
                    ,
                    e
                }();
                e.Number = a,
                e.Exception = function(e) {
                    this.Message = e
                }
                ,
                e.KeyValuePair = function() {}
                ;
                var i = function() {
                    function e() {}
                    return e.IsDataViewSupport = function() {
                        return "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
                    }
                    ,
                    e
                }();
                e.BrowserChecker = i
            }(e.Bond || (e.Bond = {}))
        }(i || (i = {})),
        function(e) {
            !function(e) {
                var t = function() {
                    function t(e) {
                        this._stream = e
                    }
                    return t.prototype.WriteBlob = function(e) {
                        this._stream.Write(e, 0, e.length)
                    }
                    ,
                    t.prototype.WriteBool = function(e) {
                        this._stream.WriteByte(e ? 1 : 0)
                    }
                    ,
                    t.prototype.WriteContainerBegin = function(e, t) {
                        this.WriteUInt8(t),
                        this.WriteUInt32(e)
                    }
                    ,
                    t.prototype.WriteMapContainerBegin = function(e, t, n) {
                        this.WriteUInt8(t),
                        this.WriteUInt8(n),
                        this.WriteUInt32(e)
                    }
                    ,
                    t.prototype.WriteContainerEnd = function() {}
                    ,
                    t.prototype.WriteDouble = function(t) {
                        var n = e.Encoding.Double.GetBytes(t);
                        this._stream.Write(n, 0, n.length)
                    }
                    ,
                    t.prototype.WriteFloat = function(t) {
                        var n = e.Encoding.Float.GetBytes(t);
                        this._stream.Write(n, 0, n.length)
                    }
                    ,
                    t.prototype.WriteFieldBegin = function(e, t, n) {
                        t <= 5 ? this._stream.WriteByte(e | t << 5) : t <= 255 ? (this._stream.WriteByte(192 | e),
                        this._stream.WriteByte(t)) : (this._stream.WriteByte(224 | e),
                        this._stream.WriteByte(t),
                        this._stream.WriteByte(t >> 8))
                    }
                    ,
                    t.prototype.WriteFieldEnd = function() {}
                    ,
                    t.prototype.WriteFieldOmitted = function(e, t, n) {}
                    ,
                    t.prototype.WriteInt16 = function(t) {
                        t = e.Encoding.Zigzag.EncodeZigzag16(t),
                        this.WriteUInt16(t)
                    }
                    ,
                    t.prototype.WriteInt32 = function(t) {
                        t = e.Encoding.Zigzag.EncodeZigzag32(t),
                        this.WriteUInt32(t)
                    }
                    ,
                    t.prototype.WriteInt64 = function(t) {
                        this.WriteUInt64(e.Encoding.Zigzag.EncodeZigzag64(t))
                    }
                    ,
                    t.prototype.WriteInt8 = function(t) {
                        this._stream.WriteByte(e.Number.ToInt8(t))
                    }
                    ,
                    t.prototype.WriteString = function(t) {
                        if ("" == t)
                            this.WriteUInt32(0);
                        else {
                            var n = e.Encoding.Utf8.GetBytes(t);
                            this.WriteUInt32(n.length),
                            this._stream.Write(n, 0, n.length)
                        }
                    }
                    ,
                    t.prototype.WriteStructBegin = function(e, t) {}
                    ,
                    t.prototype.WriteStructEnd = function(t) {
                        this.WriteUInt8(t ? e.BondDataType.BT_STOP_BASE : e.BondDataType.BT_STOP)
                    }
                    ,
                    t.prototype.WriteUInt16 = function(t) {
                        var n = e.Encoding.Varint.GetBytes(e.Number.ToUInt16(t));
                        this._stream.Write(n, 0, n.length)
                    }
                    ,
                    t.prototype.WriteUInt32 = function(t) {
                        var n = e.Encoding.Varint.GetBytes(e.Number.ToUInt32(t));
                        this._stream.Write(n, 0, n.length)
                    }
                    ,
                    t.prototype.WriteUInt64 = function(t) {
                        var n = e.Encoding.Varint64.GetBytes(t);
                        this._stream.Write(n, 0, n.length)
                    }
                    ,
                    t.prototype.WriteUInt8 = function(t) {
                        this._stream.WriteByte(e.Number.ToUInt8(t))
                    }
                    ,
                    t.prototype.WriteWString = function(e) {
                        this.WriteUInt32(e.length);
                        for (var t = 0; t < e.length; ++t) {
                            var n = e.charCodeAt(t);
                            this._stream.WriteByte(n),
                            this._stream.WriteByte(n >>> 8)
                        }
                    }
                    ,
                    t
                }();
                e.CompactBinaryProtocolWriter = t,
                e.CompactBinaryProtocolReader = function() {}
            }(e.Bond || (e.Bond = {}))
        }(i || (i = {})),
        function(e) {
            var t = function() {
                function t() {}
                return t.IsSafari = function() {
                    if (null === t._isSafari)
                        if ("undefined" != typeof navigator && navigator.userAgent) {
                            var e = navigator.userAgent.toLowerCase();
                            e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 ? t._isSafari = !0 : t._isSafari = !1
                        } else
                            t._isSafari = !1;
                    return t._isSafari
                }
                ,
                t.IsReactNative = function() {
                    return null === t._isReactNative && ("undefined" != typeof navigator && navigator.product ? t._isReactNative = "ReactNative" === navigator.product : t._isReactNative = !1),
                    t._isReactNative
                }
                ,
                t.IsUint8ArrSupported = function() {
                    return !e.Utils.IsSafari() && "undefined" != typeof Uint8Array && !e.Utils.IsReactNative()
                }
                ,
                t.ajax = function(e, n) {
                    var a = t._createConnection();
                    if (e.headers) {
                        var i = "qsp=true";
                        for (var r in e.headers)
                            i += "&",
                            i += encodeURIComponent(r),
                            i += "=",
                            i += encodeURIComponent(e.headers[r]);
                        e.url.indexOf("?") < 0 ? e.url += "?" : e.url += "&",
                        e.url += i
                    }
                    a.open(e.type, e.url, !n),
                    e.complete && (a.onload = function() {
                        e.complete(a)
                    }
                    ,
                    a.ontimeout = function() {
                        e.complete(a)
                    }
                    ,
                    a.onerror = function() {
                        e.complete(a)
                    }
                    ,
                    a.onabort = function() {
                        e.complete(a)
                    }
                    ),
                    a.send(e.data)
                }
                ,
                t.keys = function(e) {
                    if (Object.keys)
                        return Object.keys(e);
                    var t = [];
                    for (var n in e)
                        e.hasOwnProperty(n) && t.push(n);
                    return t
                }
                ,
                t.IsUsingXDomainRequest = function() {
                    return null == t._usingXDomainRequest && (void 0 === (new XMLHttpRequest).withCredentials && "undefined" != typeof XDomainRequest ? t._usingXDomainRequest = !0 : t._usingXDomainRequest = !1),
                    t._usingXDomainRequest
                }
                ,
                t._createConnection = function() {
                    var e = new XMLHttpRequest;
                    return t.IsUsingXDomainRequest() ? new XDomainRequest : e
                }
                ,
                t
            }();
            t._isSafari = null,
            t._isReactNative = null,
            t._usingXDomainRequest = null,
            e.Utils = t
        }(r || (r = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    !function(t) {
                        var n = function() {
                            function e() {}
                            return e.GetGuid = function() {
                                var e = function() {
                                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1, 5)
                                };
                                return [e(), e(), "-", e(), "-", e(), "-", e(), "-", e(), e(), e()].join("")
                            }
                            ,
                            e.GetTimeStamp = function() {
                                var e = (new Date).getTime()
                                  , t = new i.Bond.Int64("0");
                                return t.low = 4294967295 & e,
                                t.high = Math.floor(e / 4294967296),
                                t
                            }
                            ,
                            e.GetTimeStampWithValue = function(e) {
                                var t = new i.Bond.Int64("0");
                                return t.low = 4294967295 & e,
                                t.high = Math.floor(e / 4294967296),
                                t
                            }
                            ,
                            e
                        }();
                        t.utils = n,
                        function(e) {
                            e[e.NotSet = 0] = "NotSet",
                            e[e.Event = 1] = "Event",
                            e[e.PerformanceCounter = 2] = "PerformanceCounter",
                            e[e.Anomaly = 3] = "Anomaly",
                            e[e.Prediction = 4] = "Prediction",
                            e[e.TraceLog = 5] = "TraceLog",
                            e[e.EventSourceLog = 6] = "EventSourceLog",
                            e[e.HttpLog = 7] = "HttpLog",
                            e[e.PerformanceCounterAzure = 8] = "PerformanceCounterAzure",
                            e[e.PerformanceCounterGfs = 9] = "PerformanceCounterGfs"
                        }(t.RecordType || (t.RecordType = {})),
                        function(e) {
                            e[e.NotSet = 0] = "NotSet",
                            e[e.O365 = 1] = "O365",
                            e[e.SkypeBI = 2] = "SkypeBI",
                            e[e.SkypeData = 3] = "SkypeData"
                        }(t.PIIScrubber || (t.PIIScrubber = {})),
                        function(e) {
                            e[e.NotSet = 0] = "NotSet",
                            e[e.DistinguishedName = 1] = "DistinguishedName",
                            e[e.GenericData = 2] = "GenericData",
                            e[e.IPV4Address = 3] = "IPV4Address",
                            e[e.IPv6Address = 4] = "IPv6Address",
                            e[e.MailSubject = 5] = "MailSubject",
                            e[e.PhoneNumber = 6] = "PhoneNumber",
                            e[e.QueryString = 7] = "QueryString",
                            e[e.SipAddress = 8] = "SipAddress",
                            e[e.SmtpAddress = 9] = "SmtpAddress",
                            e[e.Identity = 10] = "Identity",
                            e[e.Uri = 11] = "Uri",
                            e[e.Fqdn = 12] = "Fqdn",
                            e[e.IPV4AddressLegacy = 13] = "IPV4AddressLegacy"
                        }(t.PIIKind || (t.PIIKind = {})),
                        function(e) {
                            e[e.Unknown = 0] = "Unknown",
                            e[e.MSACID = 1] = "MSACID",
                            e[e.MSAPUID = 2] = "MSAPUID",
                            e[e.ANID = 3] = "ANID",
                            e[e.OrgIdCID = 4] = "OrgIdCID",
                            e[e.OrgIdPUID = 5] = "OrgIdPUID",
                            e[e.UserObjectId = 6] = "UserObjectId",
                            e[e.Skype = 7] = "Skype",
                            e[e.Yammer = 8] = "Yammer",
                            e[e.EmailAddress = 9] = "EmailAddress",
                            e[e.PhoneNumber = 10] = "PhoneNumber",
                            e[e.SipAddress = 11] = "SipAddress",
                            e[e.MUID = 12] = "MUID"
                        }(t.UserIdType || (t.UserIdType = {}));
                        var a = function() {
                            function t() {
                                this.ScrubType = e.datamodels.PIIScrubber.NotSet,
                                this.Kind = e.datamodels.PIIKind.NotSet,
                                this.RawContent = ""
                            }
                            return t.prototype.Write = function(e) {
                                this.WriteImpl(e, !1)
                            }
                            ,
                            t.prototype.WriteImpl = function(t, n) {
                                t.WriteStructBegin(null, n),
                                this.ScrubType != e.datamodels.PIIScrubber.NotSet ? (t.WriteFieldBegin(i.Bond.BondDataType.BT_INT32, 1, null),
                                t.WriteInt32(this.ScrubType),
                                t.WriteFieldEnd()) : t.WriteFieldOmitted(i.Bond.BondDataType.BT_INT32, 1, null),
                                this.Kind != e.datamodels.PIIKind.NotSet ? (t.WriteFieldBegin(i.Bond.BondDataType.BT_INT32, 2, null),
                                t.WriteInt32(this.Kind),
                                t.WriteFieldEnd()) : t.WriteFieldOmitted(i.Bond.BondDataType.BT_INT32, 2, null),
                                "" != this.RawContent ? (t.WriteFieldBegin(i.Bond.BondDataType.BT_STRING, 3, null),
                                t.WriteString(this.RawContent),
                                t.WriteFieldEnd()) : t.WriteFieldOmitted(i.Bond.BondDataType.BT_STRING, 3, null),
                                t.WriteStructEnd(n)
                            }
                            ,
                            t.prototype.Read = function(e) {
                                this.ReadImpl(e, !1)
                            }
                            ,
                            t.prototype.ReadImpl = function(e, t) {}
                            ,
                            t
                        }();
                        t.PII = a;
                        var r = function() {
                            function t() {
                                this.Id = n.GetGuid(),
                                this.Timestamp = n.GetTimeStamp(),
                                this.Type = "",
                                this.EventType = "",
                                this.Extension = new i.Bond.Collections.Map,
                                this.RecordType = e.datamodels.RecordType.NotSet,
                                this.PIIExtensions = new i.Bond.Collections.Map
                            }
                            return t.prototype.AddOrReplacePII = function(t, n, a) {
                                var i = new e.datamodels.PII;
                                i.RawContent = n,
                                i.Kind = a,
                                i.ScrubType = e.datamodels.PIIScrubber.O365,
                                this.PIIExtensions.AddOrReplace(t, i)
                            }
                            ,
                            t.prototype.Write = function(e) {
                                this.WriteImpl(e, !1)
                            }
                            ,
                            t.prototype.WriteImpl = function(t, n) {
                                if (t.WriteStructBegin(null, n),
                                "" != this.Id ? (t.WriteFieldBegin(i.Bond.BondDataType.BT_STRING, 1, null),
                                t.WriteString(this.Id),
                                t.WriteFieldEnd()) : t.WriteFieldOmitted(i.Bond.BondDataType.BT_STRING, 1, null),
                                this.Timestamp.Equals("0") ? t.WriteFieldOmitted(i.Bond.BondDataType.BT_INT64, 3, null) : (t.WriteFieldBegin(i.Bond.BondDataType.BT_INT64, 3, null),
                                t.WriteInt64(this.Timestamp),
                                t.WriteFieldEnd()),
                                "" != this.Type ? (t.WriteFieldBegin(i.Bond.BondDataType.BT_STRING, 5, null),
                                t.WriteString(this.Type),
                                t.WriteFieldEnd()) : t.WriteFieldOmitted(i.Bond.BondDataType.BT_STRING, 5, null),
                                "" != this.EventType ? (t.WriteFieldBegin(i.Bond.BondDataType.BT_STRING, 6, null),
                                t.WriteString(this.EventType),
                                t.WriteFieldEnd()) : t.WriteFieldOmitted(i.Bond.BondDataType.BT_STRING, 6, null),
                                this.Extension.Count()) {
                                    t.WriteFieldBegin(i.Bond.BondDataType.BT_MAP, 13, null),
                                    t.WriteMapContainerBegin(this.Extension.Count(), i.Bond.BondDataType.BT_STRING, i.Bond.BondDataType.BT_STRING);
                                    for (var a = 0; a < this.Extension.GetBuffer().length; ++a)
                                        t.WriteString(this.Extension.GetBuffer()[a].Key),
                                        t.WriteString(this.Extension.GetBuffer()[a].Value);
                                    t.WriteContainerEnd(),
                                    t.WriteFieldEnd()
                                } else
                                    t.WriteFieldOmitted(i.Bond.BondDataType.BT_MAP, 13, null);
                                if (this.RecordType != e.datamodels.RecordType.NotSet ? (t.WriteFieldBegin(i.Bond.BondDataType.BT_INT32, 24, null),
                                t.WriteInt32(this.RecordType),
                                t.WriteFieldEnd()) : t.WriteFieldOmitted(i.Bond.BondDataType.BT_INT32, 24, null),
                                this.PIIExtensions.Count()) {
                                    t.WriteFieldBegin(i.Bond.BondDataType.BT_MAP, 30, null),
                                    t.WriteMapContainerBegin(this.PIIExtensions.Count(), i.Bond.BondDataType.BT_STRING, i.Bond.BondDataType.BT_STRUCT);
                                    for (var r = 0; r < this.PIIExtensions.GetBuffer().length; ++r)
                                        t.WriteString(this.PIIExtensions.GetBuffer()[r].Key),
                                        this.PIIExtensions.GetBuffer()[r].Value.WriteImpl(t, !1);
                                    t.WriteContainerEnd(),
                                    t.WriteFieldEnd()
                                } else
                                    t.WriteFieldOmitted(i.Bond.BondDataType.BT_MAP, 30, null);
                                t.WriteStructEnd(n)
                            }
                            ,
                            t.prototype.Read = function(e) {
                                this.ReadImpl(e, !1)
                            }
                            ,
                            t.prototype.ReadImpl = function(e, t) {}
                            ,
                            t
                        }();
                        t.Record = r;
                        var o = function() {
                            function e() {
                                this.Source = "",
                                this.DataPackageId = "",
                                this.Timestamp = new i.Bond.Int64("0"),
                                this.Records = []
                            }
                            return e.prototype.Write = function(e) {
                                this.WriteImpl(e, !1)
                            }
                            ,
                            e.prototype.WriteImpl = function(e, t) {
                                if (e.WriteStructBegin(null, t),
                                "" != this.Source ? (e.WriteFieldBegin(i.Bond.BondDataType.BT_STRING, 2, null),
                                e.WriteString(this.Source),
                                e.WriteFieldEnd()) : e.WriteFieldOmitted(i.Bond.BondDataType.BT_STRING, 2, null),
                                "" != this.DataPackageId ? (e.WriteFieldBegin(i.Bond.BondDataType.BT_STRING, 5, null),
                                e.WriteString(this.DataPackageId),
                                e.WriteFieldEnd()) : e.WriteFieldOmitted(i.Bond.BondDataType.BT_STRING, 5, null),
                                this.Timestamp.Equals("0") ? e.WriteFieldOmitted(i.Bond.BondDataType.BT_INT64, 6, null) : (e.WriteFieldBegin(i.Bond.BondDataType.BT_INT64, 6, null),
                                e.WriteInt64(this.Timestamp),
                                e.WriteFieldEnd()),
                                this.Records.length) {
                                    e.WriteFieldBegin(i.Bond.BondDataType.BT_LIST, 8, null),
                                    e.WriteContainerBegin(this.Records.length, i.Bond.BondDataType.BT_STRUCT);
                                    for (var n = 0; n < this.Records.length; ++n)
                                        this.Records[n].WriteImpl(e, !1);
                                    e.WriteContainerEnd(),
                                    e.WriteFieldEnd()
                                } else
                                    e.WriteFieldOmitted(i.Bond.BondDataType.BT_LIST, 8, null);
                                e.WriteStructEnd(t)
                            }
                            ,
                            e.prototype.Read = function(e) {
                                this.ReadImpl(e, !1)
                            }
                            ,
                            e.prototype.ReadImpl = function(e, t) {}
                            ,
                            e
                        }();
                        t.DataPackage = o;
                        var s = function() {
                            function e() {
                                this.DataPackages = [],
                                this.RequestRetryCount = 0
                            }
                            return e.prototype.Write = function(e) {
                                this.WriteImpl(e, !1)
                            }
                            ,
                            e.prototype.WriteImpl = function(e, t) {
                                if (e.WriteStructBegin(null, t),
                                this.DataPackages.length) {
                                    e.WriteFieldBegin(i.Bond.BondDataType.BT_LIST, 1, null),
                                    e.WriteContainerBegin(this.DataPackages.length, i.Bond.BondDataType.BT_STRUCT);
                                    for (var n = 0; n < this.DataPackages.length; ++n)
                                        this.DataPackages[n].WriteImpl(e, !1);
                                    e.WriteContainerEnd(),
                                    e.WriteFieldEnd()
                                } else
                                    e.WriteFieldOmitted(i.Bond.BondDataType.BT_LIST, 1, null);
                                0 != this.RequestRetryCount ? (e.WriteFieldBegin(i.Bond.BondDataType.BT_INT32, 2, null),
                                e.WriteInt32(this.RequestRetryCount),
                                e.WriteFieldEnd()) : e.WriteFieldOmitted(i.Bond.BondDataType.BT_INT32, 2, null),
                                e.WriteStructEnd(t)
                            }
                            ,
                            e.prototype.Read = function(e) {
                                this.ReadImpl(e, !1)
                            }
                            ,
                            e.prototype.ReadImpl = function(e, t) {}
                            ,
                            e
                        }();
                        t.ClientToCollectorRequest = s
                    }(e.datamodels || (e.datamodels = {}))
                }(e.telemetry || (e.telemetry = {}))
            }(e.applications || (e.applications = {}))
        }(o || (o = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    !function(t) {
                        var n, o;
                        !function(e) {
                            e[e.SENT = 0] = "SENT",
                            e[e.SEND_FAILED = 1] = "SEND_FAILED"
                        }(n = t.CallbackEventType || (t.CallbackEventType = {})),
                        function(e) {
                            e[e.DATARV_ERROR_OK = 0] = "DATARV_ERROR_OK",
                            e[e.DATARV_ERROR_INVALID_EVENT = 1] = "DATARV_ERROR_INVALID_EVENT",
                            e[e.DATARV_ERROR_INVALID_CONFIG = 2] = "DATARV_ERROR_INVALID_CONFIG",
                            e[e.DATARV_ERROR_INVALID_DEPENDENCIES = 3] = "DATARV_ERROR_INVALID_DEPENDENCIES",
                            e[e.DATARV_ERROR_INVALID_STATUS = 4] = "DATARV_ERROR_INVALID_STATUS",
                            e[e.DATARV_ERROR_INVALID_ARG = 5] = "DATARV_ERROR_INVALID_ARG"
                        }(o = t.DATARV_ERROR || (t.DATARV_ERROR = {}));
                        var s = function() {
                            function e(e) {
                                this._errorCode = o.DATARV_ERROR_OK,
                                this._errorCode = e
                            }
                            return e.prototype.ErrorCode = function() {
                                return this._errorCode
                            }
                            ,
                            e.prototype.toString = function() {
                                switch (this._errorCode) {
                                case o.DATARV_ERROR_OK:
                                    return "DATARV_ERROR_OK";
                                case o.DATARV_ERROR_INVALID_EVENT:
                                    return "Event is invalid. Either event.Id is empty, or event.Timestamp is empty, or event.EventType is empty.";
                                case o.DATARV_ERROR_INVALID_CONFIG:
                                    return "Invalid configuration. CollectorUrl is missing.";
                                case o.DATARV_ERROR_INVALID_DEPENDENCIES:
                                    return "DATARV_ERROR_INVALID_DEPENDENCIES";
                                case o.DATARV_ERROR_INVALID_STATUS:
                                    return "Telemetry Manager is not initialized.";
                                case o.DATARV_ERROR_INVALID_ARG:
                                    return "TenantToken is null or empty, or events is null.";
                                default:
                                    return "Unknown error"
                                }
                            }
                            ,
                            e
                        }();
                        t.Exception = s,
                        t.TelemetryConfig = function() {}
                        ;
                        var c = function() {
                            function e() {}
                            return e.CreateTelemetryManager = function() {
                                return new u
                            }
                            ,
                            e
                        }();
                        t.TelemetryManagerFactory = c;
                        var d, l = function() {
                            function e() {}
                            return e.MaxPackageSizeInBytes = function() {
                                return 3e6
                            }
                            ,
                            e.TimeIntervalForNextSendInMS = function() {
                                return 1e3
                            }
                            ,
                            e
                        }();
                        !function(e) {
                            e[e.Created = 0] = "Created",
                            e[e.Initialized = 1] = "Initialized",
                            e[e.Started = 2] = "Started"
                        }(d || (d = {}));
                        var u = function() {
                            function t() {
                                this._MaxPackageSizeInBytes = l.MaxPackageSizeInBytes(),
                                this._listeners = [],
                                this._status = d.Created,
                                this._etag = null,
                                this._testServerResponseHook = null,
                                this._isPaused = !1
                            }
                            return t.prototype.Initialize = function(e) {
                                if (this._status != d.Created)
                                    throw new s(o.DATARV_ERROR_INVALID_STATUS);
                                if (!e || !e.collectorUrl)
                                    throw new s(o.DATARV_ERROR_INVALID_CONFIG);
                                this._config = e,
                                this._Reset(),
                                this._status = d.Initialized,
                                this._Verbose("Initialize() done")
                            }
                            ,
                            t.prototype.AddListener = function(e) {
                                if (this._status < d.Initialized)
                                    throw new s(o.DATARV_ERROR_INVALID_STATUS);
                                this._Verbose(["AddListener(), status: ", this._status, " old length: ", this._listeners.length, " func: ", e].join(""));
                                for (var t = 0; t < this._listeners.length; ++t)
                                    if (this._listeners[t] == e)
                                        return void this._Verbose("the listener has been added already, index: " + t);
                                this._listeners.push(e),
                                this._Verbose("AddListener() done, the new length: " + this._listeners.length)
                            }
                            ,
                            t.prototype.RemoveListener = function(e) {
                                if (this._status < d.Initialized)
                                    throw new s(o.DATARV_ERROR_INVALID_STATUS);
                                this._Verbose(["RemoveListener(), status: ", this._status, " old length: ", this._listeners.length, " func: ", e].join(""));
                                for (var t = 0; t < this._listeners.length; ++t)
                                    if (this._listeners[t] == e)
                                        return 1 == this._listeners.length ? this._listeners = [] : t == this._listeners.length - 1 ? this._listeners.pop() : this._listeners[t] = this._listeners.pop(),
                                        void this._Verbose(["this listener has been found, index: ", t, "new length: ", this._listeners.length].join(""));
                                this._Verbose("listener isn't been found, new length" + this._listeners.length)
                            }
                            ,
                            t.prototype.Start = function() {
                                if (this._status < d.Initialized)
                                    throw new s(o.DATARV_ERROR_INVALID_STATUS);
                                this._Verbose(["Start(), status:", this._status, "tag:", t._tag].join(" ")),
                                this._status >= d.Started && this._Verbose("Start() already, ignore"),
                                ++t._tag,
                                this._status = d.Started,
                                this._Verbose(["Start() done, status: ", this._status, "tag: ", t._tag].join(""))
                            }
                            ,
                            t.prototype.Stop = function() {
                                if (this._status < d.Initialized)
                                    throw new s(o.DATARV_ERROR_INVALID_STATUS);
                                return this._Verbose("Stop(), status: " + this._status),
                                this._status == d.Initialized ? void this._Verbose("Stop() already, ignore") : (this._Reset(),
                                this._status = d.Initialized,
                                void this._Verbose("Stop() done, status: " + this._status))
                            }
                            ,
                            t.prototype.Pause = function() {
                                this._isPaused = !0,
                                this._CleanTimer()
                            }
                            ,
                            t.prototype.Resume = function() {
                                this._isPaused = !1,
                                this._eventsCache.IsEmpty() || this._timer || this._ScheduleTimer(!1)
                            }
                            ,
                            t.prototype.Flush = function(e) {
                                this._eventsCache.IsEmpty() || this._WorkThread(e, !0)
                            }
                            ,
                            t.prototype.SendAsync = function(e, n) {
                                if (this._status < d.Initialized)
                                    throw new s(o.DATARV_ERROR_INVALID_STATUS);
                                if (this._Verbose(["SendAsync(), status:", this._status, "tenantToken:", e, "count:", n.length].join(" ")),
                                this._status < d.Started)
                                    return this._Info("SendAsync(), not started, ignore, return false"),
                                    !1;
                                if (!e || !n)
                                    throw this._Error("SendAsync(), tenantToken or events is null or empty"),
                                    new s(o.DATARV_ERROR_INVALID_ARG);
                                for (var a = 0; a < n.length; ++a)
                                    if (!n[a].Id || !t._eventTypeRegex.test(n[a].EventType) || n[a].Timestamp.Equals("0"))
                                        throw this._Error(["eventId:", n[a].Id, "eventType:", n[a].EventType, "timestamp high:", n[a].Timestamp.high, "timestamp low:", n[a].Timestamp.low].join("")),
                                        new s(o.DATARV_ERROR_INVALID_EVENT);
                                return this._eventsCache.AddEvents(e, n),
                                this._Verbose(["SendAsync(), currentTimer: ", this._timer, "eventsCacheIsEmpty", this._eventsCache.IsEmpty()].join(" ")),
                                this._eventsCache.IsEmpty() || this._timer || this._ScheduleTimer(!1),
                                this._Verbose("SendAsync() done"),
                                !0
                            }
                            ,
                            t.prototype._WorkThread = function(e, n) {
                                var o = this;
                                try {
                                    if (this._Verbose("_WorkThread, status: " + this._status),
                                    this._status < d.Started)
                                        return void this._Verbose("_WorkThread, status is not started, return");
                                    var s = this._eventsCache.DequeuEvents();
                                    if (null == s)
                                        return this._Verbose("_WorkThread, No events found, return"),
                                        void this._CleanTimer();
                                    var c = this._PackEvents(s.tenantToken, s.events);
                                    if (this._eventsCache.AddEvents(s.tenantToken, c.remainedEvents),
                                    null == c.buffer || 0 == c.buffer.length)
                                        return void (this._eventsCache.IsEmpty() ? (this._Verbose("eventsCache is empty, stop schedule"),
                                        this._CleanTimer()) : (this._Verbose("eventsCache is not empty, schedule for next run"),
                                        this._ScheduleTimer(!1)));
                                    if (this._testServerResponseHook) {
                                        var l = this._testServerResponseHook();
                                        return void setTimeout(this._SendCallback(f, s.tenantToken, c.sendEvents, l, !1, null), 100)
                                    }
                                    var u = {
                                        type: "POST",
                                        url: this._config.collectorUrl,
                                        processData: !1,
                                        headers: {
                                            "content-type": "application/bond-compact-binary",
                                            "client-id": "NO_AUTH",
                                            "sdk-version": "ACT-Web-JS-" + a.version
                                        },
                                        complete: function(t) {
                                            return o._SendCallback(f, s.tenantToken, c.sendEvents, t, n, e)
                                        }
                                    };
                                    r.Utils.IsUint8ArrSupported() ? (this._Verbose("Uint8Array is defined, send with binary format directly."),
                                    u.data = new Uint8Array(c.buffer)) : (this._Verbose("Uint8Array is undefined, send with base64 encode."),
                                    u.data = i.Bond.Encoding.Base64.GetString(c.buffer),
                                    u.headers["content-encoding"] = "base64"),
                                    s.tenantToken && (u.headers["x-apikey"] = s.tenantToken);
                                    var f = t._tag;
                                    this._lastActiveTime = (new Date).getTime(),
                                    r.Utils.ajax(u, n),
                                    this._Verbose("_Workthread, send via jquery, tag: " + f)
                                } catch (e) {
                                    this._Error("_WorkThread, exception: " + e)
                                }
                            }
                            ,
                            t.prototype._PackEvents = function(t, n) {
                                this._Verbose("_PackageEvents, total Count: " + n.length);
                                var a = new e.datamodels.ClientToCollectorRequest
                                  , i = new e.datamodels.DataPackage;
                                i.Source = "JS_default_source",
                                i.DataPackageId = e.datamodels.utils.GetGuid(),
                                i.Timestamp = e.datamodels.utils.GetTimeStamp();
                                var r, o = n;
                                for (n = []; i.Records = [],
                                i.Records.push.apply(i.Records, o),
                                a.DataPackages = [],
                                a.DataPackages.push(i),
                                r = this._Serialize(a),
                                this._Verbose(["_PackageEvents, sendEvents.length:", o.length, "buffer.length:", r.length, "MaxPackageSize:", this._MaxPackageSizeInBytes].join("")),
                                !(r.length < this._MaxPackageSizeInBytes); ) {
                                    if (1 == o.length) {
                                        o = [],
                                        r = null;
                                        break
                                    }
                                    var s = o.splice(0, Math.floor(o.length / 2));
                                    this._Verbose("_PackageEvents, too large, package again"),
                                    n.push.apply(n, o),
                                    o = s
                                }
                                return this._Verbose(["_PakcageEvents done, sendEventsCount:", o.length, "buffer.length:", null == r ? 0 : r.length, "remained events:", n.length].join("")),
                                {
                                    buffer: r,
                                    sendEvents: o,
                                    remainedEvents: n
                                }
                            }
                            ,
                            t.prototype._Serialize = function(e) {
                                var t = new i.Bond.IO.MemoryStream
                                  , n = new i.Bond.CompactBinaryProtocolWriter(t);
                                return e.Write(n),
                                t.GetBuffer()
                            }
                            ,
                            t.prototype._SendCallback = function(e, a, i, r, o, s) {
                                if (this._Verbose(["_SendCallback", "tag:", e, "current tag:", t._tag, "tenantToken:", a, "events count:", i.length, "jqXHR:", r].join("")),
                                s && s(r ? r.status : 0, a, i),
                                !o) {
                                    var c = r && void 0 !== r.status && 200 === r.status;
                                    if (this._status < d.Started || e < t._tag)
                                        return void this._Verbose("_SendCallback, is not started, or tag is not the same, return");
                                    if (!c && (r && void 0 !== r.status && 501 !== r.status && 505 !== r.status && (r.status < 300 || r.status >= 500 || 408 === r.status) || !r || void 0 === r.status))
                                        return this._Verbose("retry statusCode: " + (r ? r.status : 0)),
                                        this._eventsCache.AddEvents(a, i),
                                        void this._ScheduleTimer(!0);
                                    for (var l = 0; l < this._listeners.length; ++l)
                                        this._listeners[l](c ? n.SENT : n.SEND_FAILED, r ? r.status : 0, a, i);
                                    this._eventsCache.IsEmpty() ? (this._Verbose("eventsCache is empty, stop schedule"),
                                    this._CleanTimer()) : (this._Verbose("eventsCache is not empty, schedule for next run"),
                                    this._ScheduleTimer(!1))
                                }
                            }
                            ,
                            t.prototype._CleanTimer = function() {
                                this._Verbose("_CleanTimer(), timer: " + this._timer),
                                this._timer && (clearTimeout(this._timer),
                                this._timer = null)
                            }
                            ,
                            t.prototype._ScheduleTimer = function(e) {
                                var t = this;
                                if (!this._isPaused)
                                    if (this._Verbose("_ScheduleTimer: isRetry: " + e),
                                    this._CleanTimer(),
                                    e) {
                                        this._Verbose("_ScheduleTimer, current factor: " + this._rescheduleFactor);
                                        var n = Math.floor(5 * this._rescheduleFactor * (1 + Math.random()));
                                        this._timer = setTimeout(function() {
                                            return t._WorkThread(null, !1)
                                        }, 1e3 * n),
                                        this._Verbose("_ScheduleTimer, next try (s): " + n),
                                        this._rescheduleFactor <<= 1,
                                        this._rescheduleFactor > 64 && (this._rescheduleFactor = 1)
                                    } else {
                                        n = 0;
                                        var a = (new Date).getTime() - this._lastActiveTime;
                                        n = a > l.TimeIntervalForNextSendInMS() ? 0 : l.TimeIntervalForNextSendInMS() - a,
                                        this._timer = setTimeout(function() {
                                            return t._WorkThread(null, !1)
                                        }, n),
                                        this._Verbose("_ScheduleTimer, next try: " + n),
                                        this._rescheduleFactor = 1
                                    }
                            }
                            ,
                            t.prototype._Verbose = function(e) {
                                this._config.log && this._config.log.Verbose("[TelemetryManagerImpl]: " + e)
                            }
                            ,
                            t.prototype._Info = function(e) {
                                this._config.log && this._config.log.Info("[TelemetryManagerImpl]: " + e)
                            }
                            ,
                            t.prototype._Error = function(e) {
                                this._config.log && this._config.log.Error("[TelemetryManagerImpl]: " + e)
                            }
                            ,
                            t.prototype._Reset = function() {
                                this._Verbose("Reset()"),
                                this._CleanTimer(),
                                this._lastActiveTime = 0,
                                this._rescheduleFactor = 1,
                                this._sendingEvents = [],
                                this._eventsCache = new f
                            }
                            ,
                            t.prototype.__GetListenerArray = function() {
                                return this._listeners
                            }
                            ,
                            t.prototype.__GetTotalEventsCount = function() {
                                return this._eventsCache.GetTotalEventsCount()
                            }
                            ,
                            t.prototype.__IsScheduled = function() {
                                return null != this._timer
                            }
                            ,
                            t.prototype.__ChageMaxPackageSizeInKB = function(e) {
                                this._MaxPackageSizeInBytes = 1024 * e
                            }
                            ,
                            t.prototype.__SetTestServerResponseHook = function(e) {
                                this._testServerResponseHook = e
                            }
                            ,
                            t
                        }();
                        u._eventTypeRegex = /^[a-zA-Z0-9]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/,
                        u._tag = 0;
                        var f = function() {
                            function e() {
                                this._events = {},
                                this._tokens = []
                            }
                            return e.prototype.AddEvents = function(e, t) {
                                t.length && (this._events[e] || (this._events[e] = [],
                                this._tokens.push(e)),
                                this._events[e].push.apply(this._events[e], t))
                            }
                            ,
                            e.prototype.IsEmpty = function() {
                                return 0 == this._tokens.length
                            }
                            ,
                            e.prototype.DequeuEvents = function() {
                                if (0 == this._tokens.length)
                                    return null;
                                var e = this._tokens.shift()
                                  , t = this._events[e];
                                return delete this._events[e],
                                {
                                    tenantToken: e,
                                    events: t
                                }
                            }
                            ,
                            e.prototype.GetTotalEventsCount = function() {
                                var e = 0;
                                for (var t in this._events)
                                    e += this._events[t].length;
                                return e
                            }
                            ,
                            e
                        }()
                    }(e._sender || (e._sender = {}))
                }(e.telemetry || (e.telemetry = {}))
            }(e.applications || (e.applications = {}))
        }(o || (o = {})),
        function(e) {
            var t;
            !function(t) {
                var n = t._sender.TelemetryManagerFactory.CreateTelemetryManager()
                  , i = function() {
                    this.collectorUrl = null,
                    this.enableAutoUserSession = !1,
                    this.browserOverrides = null,
                    this.disableCookies = !1
                };
                i.COLLECTOR_URL_UNITED_STATES = "https://us.pipe.aria.microsoft.com/Collector/3.0/",
                i.COLLECTOR_URL_GERMANY = "https://de.pipe.aria.microsoft.com/Collector/3.0/",
                i.COLLECTOR_URL_AUSTRALIA = "https://au.pipe.aria.microsoft.com/Collector/3.0/",
                i.COLLECTOR_URL_JAPAN = "https://jp.pipe.aria.microsoft.com/Collector/3.0/",
                i.COLLECTOR_URL_EUROPE = "https://eu.pipe.aria.microsoft.com/Collector/3.0/",
                t.LogConfiguration = i;
                var r = function() {
                    this.onSaveData = null,
                    this.onGetData = null
                };
                t.LogConfigurationBrowserOverrides = r;
                var o, s = function() {
                    function e() {
                        this.value = null,
                        this.pii = null
                    }
                    return e._isPii = function(e) {
                        return null != e && e !== t.datamodels.PIIKind.NotSet && !isNaN(e) && void 0 !== t.datamodels.PIIKind[e]
                    }
                    ,
                    e
                }(), c = function() {
                    function e() {
                        this.name = null,
                        this.timestamp = null,
                        this.properties = {},
                        this.eventType = null
                    }
                    return e.prototype.setProperty = function(n, a, i) {
                        if (!n || !e._propertyNameRegex.test(n))
                            throw new d(o.INVALID_PROPERTY_NAME);
                        this.properties[n] = i ? {
                            value: a,
                            pii: i != t.datamodels.PIIKind.NotSet ? i : null
                        } : {
                            value: a,
                            pii: null
                        }
                    }
                    ,
                    e
                }();
                c._propertyNameRegex = /^[a-zA-Z0-9](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/,
                t.EventProperties = c,
                function(e) {
                    e[e.INVALID_TENANT_TOKEN = 1] = "INVALID_TENANT_TOKEN",
                    e[e.MISSING_EVENT_PROPERTIES_NAME = 2] = "MISSING_EVENT_PROPERTIES_NAME",
                    e[e.INVALID_PROPERTY_NAME = 3] = "INVALID_PROPERTY_NAME",
                    e[e.MISSING_FAILURE_SIGNATURE = 5] = "MISSING_FAILURE_SIGNATURE",
                    e[e.MISSING_FAILURE_DETAIL = 6] = "MISSING_FAILURE_DETAIL",
                    e[e.MISSING_PAGEVIEW_ID = 7] = "MISSING_PAGEVIEW_ID",
                    e[e.MISSING_PAGEVIEW_NAME = 8] = "MISSING_PAGEVIEW_NAME",
                    e[e.INVALID_SESSION_STATE = 9] = "INVALID_SESSION_STATE",
                    e[e.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET = 10] = "INVALID_CONFIGURATION_USE_CUSTOM_GET_SET"
                }(o = t.TelemetryError || (t.TelemetryError = {}));
                var d = function() {
                    function e(e) {
                        this.errorCode = null,
                        this.errorCode = e
                    }
                    return e.prototype.ErrorCode = function() {
                        return this.errorCode
                    }
                    ,
                    e.prototype.toString = function() {
                        switch (this.errorCode) {
                        case o.INVALID_TENANT_TOKEN:
                            return "Invalid tenant token";
                        case o.MISSING_EVENT_PROPERTIES_NAME:
                            return "Eventproperties.name can not be null or empty";
                        case o.INVALID_PROPERTY_NAME:
                            return "Invalid Key. Key does not conform to regular expression ^[a-zA-Z0-9](([a-zA-Z0-9|_|.]){0,98}[a-zA-Z0-9])?$";
                        case o.MISSING_FAILURE_SIGNATURE:
                            return "Failure signature can't be null or empty.";
                        case o.MISSING_FAILURE_DETAIL:
                            return "Failure detail can't be null or empty.";
                        case o.MISSING_PAGEVIEW_ID:
                            return "Pageview id can't be null or empty.";
                        case o.MISSING_PAGEVIEW_NAME:
                            return "Pageview name can't be null or empty.";
                        case o.INVALID_SESSION_STATE:
                            return "Session state has to be a value from the SessionState enum.";
                        case o.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET:
                            return "Invalid configuration provided during initialization. Both onGetConfigData and onSaveConfigData must be provided together.  These are manditory when running in a non-brower enviornment";
                        default:
                            return "Unknown error"
                        }
                    }
                    ,
                    e
                }();
                t.Exception = d;
                var l = function() {
                    function n(e) {
                        this.contextMap = {},
                        this.piiKind = t.datamodels.PIIKind.NotSet,
                        this._allowDeviceInfoFields = !1,
                        this._allowDeviceInfoFields = e
                    }
                    return n.prototype.setAppId = function(e) {
                        e && (this.contextMap["AppInfo.Id"] = e)
                    }
                    ,
                    n.prototype.setAppVersion = function(e) {
                        e && (this.contextMap["AppInfo.Version"] = e)
                    }
                    ,
                    n.prototype.setAppLanguage = function(e) {
                        e && (this.contextMap["AppInfo.Language"] = e)
                    }
                    ,
                    n.prototype.setDeviceId = function(e) {
                        e && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.Id"] = e,
                        f.checkAndUpdateDeviceId(e))
                    }
                    ,
                    n.prototype.setDeviceOsName = function(e) {
                        e && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.OsName"] = e)
                    }
                    ,
                    n.prototype.setDeviceOsVersion = function(e) {
                        e && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.OsVersion"] = e)
                    }
                    ,
                    n.prototype.setDeviceBrowserName = function(e) {
                        e && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.BrowserName"] = e)
                    }
                    ,
                    n.prototype.setDeviceBrowserVersion = function(e) {
                        e && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.BrowserVersion"] = e)
                    }
                    ,
                    n.prototype.setUserId = function(t, n, a) {
                        if (t && (this.contextMap["UserInfo.Id"] = t),
                        a)
                            this.contextMap["UserInfo.IdType"] = a;
                        else {
                            var i;
                            switch (n) {
                            case e.applications.telemetry.datamodels.PIIKind.SipAddress:
                                i = e.applications.telemetry.datamodels.UserIdType.SipAddress;
                                break;
                            case e.applications.telemetry.datamodels.PIIKind.PhoneNumber:
                                i = e.applications.telemetry.datamodels.UserIdType.PhoneNumber;
                                break;
                            case e.applications.telemetry.datamodels.PIIKind.SmtpAddress:
                                i = e.applications.telemetry.datamodels.UserIdType.EmailAddress;
                                break;
                            default:
                                i = e.applications.telemetry.datamodels.UserIdType.Unknown
                            }
                            this.contextMap["UserInfo.IdType"] = i
                        }
                        if (n)
                            s._isPii(n) && (this.piiKind = n);
                        else {
                            var r;
                            switch (a) {
                            case e.applications.telemetry.datamodels.UserIdType.Skype:
                                r = e.applications.telemetry.datamodels.PIIKind.Identity;
                                break;
                            case e.applications.telemetry.datamodels.UserIdType.EmailAddress:
                                r = e.applications.telemetry.datamodels.PIIKind.SmtpAddress;
                                break;
                            case e.applications.telemetry.datamodels.UserIdType.PhoneNumber:
                                r = e.applications.telemetry.datamodels.PIIKind.PhoneNumber;
                                break;
                            case e.applications.telemetry.datamodels.UserIdType.SipAddress:
                                r = e.applications.telemetry.datamodels.PIIKind.SipAddress;
                                break;
                            default:
                                r = e.applications.telemetry.datamodels.PIIKind.NotSet
                            }
                            s._isPii(r) && (this.piiKind = r)
                        }
                    }
                    ,
                    n.prototype.setUserMsaId = function(e) {
                        e && (this.contextMap["UserInfo.MsaId"] = e)
                    }
                    ,
                    n.prototype.setUserANID = function(e) {
                        e && (this.contextMap["UserInfo.ANID"] = e)
                    }
                    ,
                    n.prototype.setUserAdvertisingId = function(e) {
                        e && (this.contextMap["UserInfo.AdvertisingId"] = e)
                    }
                    ,
                    n.prototype.setUserTimeZone = function(e) {
                        e && (this.contextMap["UserInfo.TimeZone"] = e)
                    }
                    ,
                    n.prototype.setUserLanguage = function(e) {
                        e && (this.contextMap["UserInfo.Language"] = e)
                    }
                    ,
                    n
                }();
                t.SemanticContext = l;
                var u, f = function() {
                    function e() {}
                    return e.initialize = function(n, a) {
                        this._overrides = n,
                        this._disableCookies = a;
                        var i = e._getAppLanguage();
                        i && e.semanticContext.setAppLanguage(i);
                        var r = e._getUserLanguage();
                        r && e.semanticContext.setUserLanguage(r);
                        var o = (new Date).getTimezoneOffset()
                          , s = o % 60
                          , c = (o - s) / 60
                          , d = "+";
                        if (c > 0 && (d = "-"),
                        e.semanticContext.setUserTimeZone(d + (c < 10 ? "0" + c : c.toString()) + ":" + (s < 10 ? "0" + s : s.toString())),
                        e._getUserAgent() && (e.semanticContext.setDeviceBrowserName(e._getBrowserName()),
                        e.semanticContext.setDeviceBrowserVersion(e._getBrowserVersion()),
                        e.semanticContext.setDeviceOsName(e._getOsName()),
                        e.semanticContext.setDeviceOsVersion(e._getOsVersion())),
                        this._disableCookies && !this._overrides)
                            return e._deleteCookie(e.DEVICE_ID_COOKIE),
                            void e._deleteCookie(e.FIRST_LAUNCH_TIME_COOKIE);
                        var l = e._getData(e.DEVICE_ID_COOKIE);
                        l && "" != l || (l = t.datamodels.utils.GetGuid()),
                        e.semanticContext.setDeviceId(l)
                    }
                    ,
                    e.checkAndUpdateDeviceId = function(t) {
                        var n = e._getData(e.DEVICE_ID_COOKIE)
                          , a = e._getData(e.FIRST_LAUNCH_TIME_COOKIE);
                        n !== t && (a = (new Date).getTime().toString()),
                        e.firstLaunchTime = parseInt(a),
                        e._saveData(e.DEVICE_ID_COOKIE, t),
                        e._saveData(e.FIRST_LAUNCH_TIME_COOKIE, a)
                    }
                    ,
                    e._saveData = function(t, n) {
                        if (this._overrides)
                            this._overrides.onSaveData(t, n);
                        else if ("undefined" != typeof document && void 0 !== document.cookie && !e._disableCookies) {
                            var a = new Date;
                            a.setTime(a.getTime() + 31536e6);
                            var i = "expires=" + a.toUTCString();
                            document.cookie = t + "=" + n + "; " + i
                        }
                    }
                    ,
                    e._getData = function(t) {
                        if (this._overrides)
                            return this._overrides.onGetData(t) || "";
                        if ("undefined" != typeof document && void 0 !== document.cookie && !e._disableCookies)
                            for (var n = t + "=", a = document.cookie.split(";"), i = 0; i < a.length; i++) {
                                for (var r = a[i], o = 0; " " == r.charAt(o); )
                                    o++;
                                if (0 == (r = r.substring(o)).indexOf(n))
                                    return r.substring(n.length, r.length)
                            }
                        return ""
                    }
                    ,
                    e._getUserAgent = function() {
                        return "undefined" != typeof navigator && navigator.userAgent || ""
                    }
                    ,
                    e._getAppLanguage = function() {
                        return "undefined" != typeof document && document.documentElement ? document.documentElement.lang : null
                    }
                    ,
                    e._getUserLanguage = function() {
                        return "undefined" != typeof navigator ? navigator.userLanguage || navigator.language : null
                    }
                    ,
                    e._userAgentContainsString = function(t) {
                        return e._getUserAgent().indexOf(t) > -1
                    }
                    ,
                    e._isIe = function() {
                        return e._userAgentContainsString("Trident")
                    }
                    ,
                    e._isEdge = function() {
                        return e._userAgentContainsString(e.BROWSERS.EDGE)
                    }
                    ,
                    e._isOpera = function() {
                        return e._userAgentContainsString("OPR/")
                    }
                    ,
                    e._getBrowserName = function() {
                        return e._isOpera() ? e.BROWSERS.UNKNOWN : e._userAgentContainsString(e.BROWSERS.PHANTOMJS) ? e.BROWSERS.PHANTOMJS : e._isIe() ? e.BROWSERS.MSIE : e._isEdge() ? e.BROWSERS.EDGE : e._userAgentContainsString(e.BROWSERS.ELECTRON) ? e.BROWSERS.ELECTRON : e._userAgentContainsString(e.BROWSERS.CHROME) ? e.BROWSERS.CHROME : e._userAgentContainsString(e.BROWSERS.FIREFOX) ? e.BROWSERS.FIREFOX : e._userAgentContainsString(e.BROWSERS.SAFARI) ? e.BROWSERS.SAFARI : e._userAgentContainsString(e.BROWSERS.SKYPE_SHELL) ? e.BROWSERS.SKYPE_SHELL : e.BROWSERS.UNKNOWN
                    }
                    ,
                    e._getBrowserVersion = function() {
                        return e._isIe() ? function() {
                            var t, n = e._getUserAgent(), a = n.match(new RegExp(e.BROWSERS.MSIE + " " + e.REGEX_VERSION));
                            return a ? a[1] : (t = n.match(new RegExp("rv:" + e.REGEX_VERSION))) ? t[1] : void 0
                        }() : function(t) {
                            var n;
                            return t === e.BROWSERS.SAFARI && (t = "Version"),
                            (n = e._getUserAgent().match(new RegExp(t + "/" + e.REGEX_VERSION))) ? n[1] : e.UNKNOWN_VERSION
                        }(e._getBrowserName())
                    }
                    ,
                    e._getOsName = function() {
                        return e._getUserAgent().match(/windows\sphone\s\d+\.\d+/i) ? e.OPERATING_SYSTEMS.WINDOWS_PHONE : e._getUserAgent().match(/ arm;/i) ? e.OPERATING_SYSTEMS.WINDOWS_RT : e._getUserAgent().match(/(iPad|iPhone|iPod)(?=.*like Mac OS X)/i) ? e.OPERATING_SYSTEMS.IOS : e._getUserAgent().match(/android/i) ? e.OPERATING_SYSTEMS.ANDROID : e._getUserAgent().match(/(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i) ? e.OPERATING_SYSTEMS.LINUX : e._getUserAgent().match(/(macintosh|mac os x)/i) ? e.OPERATING_SYSTEMS.MACOSX : e._getUserAgent().match(/(windows|win32)/i) ? e.OPERATING_SYSTEMS.WINDOWS : e.OPERATING_SYSTEMS.UNKNOWN
                    }
                    ,
                    e._getOsVersion = function() {
                        return e._getOsName() === e.OPERATING_SYSTEMS.WINDOWS ? function() {
                            var t = e._getUserAgent().match(new RegExp("Windows NT " + e.REGEX_VERSION));
                            return t && e.VERSION_MAPPINGS[t[1]] ? e.VERSION_MAPPINGS[t[1]] : e.UNKNOWN_VERSION
                        }() : e._getOsName() === e.OPERATING_SYSTEMS.MACOSX ? function() {
                            var t = e._getUserAgent().match(new RegExp(e.OPERATING_SYSTEMS.MACOSX + " " + e.REGEX_VERSION_MAC));
                            if (t) {
                                var n = t[1].replace(/_/g, ".");
                                if (n) {
                                    var a = function(e) {
                                        return e.indexOf(".") > -1 ? "." : e.indexOf("_") > -1 ? "_" : null
                                    }(n);
                                    return a ? n.split(a)[0] : n
                                }
                            }
                            return e.UNKNOWN_VERSION
                        }() : e.UNKNOWN_VERSION
                    }
                    ,
                    e
                }();
                f.semanticContext = new l(!0),
                f.firstLaunchTime = -1,
                f.BROWSERS = {
                    MSIE: "MSIE",
                    CHROME: "Chrome",
                    FIREFOX: "Firefox",
                    SAFARI: "Safari",
                    EDGE: "Edge",
                    ELECTRON: "Electron",
                    SKYPE_SHELL: "SkypeShell",
                    PHANTOMJS: "PhantomJS",
                    UNKNOWN: "Unknown"
                },
                f.OPERATING_SYSTEMS = {
                    WINDOWS: "Windows",
                    MACOSX: "Mac OS X",
                    WINDOWS_PHONE: "Windows Phone",
                    WINDOWS_RT: "Windows RT",
                    IOS: "iOS",
                    ANDROID: "Android",
                    LINUX: "Linux",
                    UNKNOWN: "Unknown"
                },
                f.VERSION_MAPPINGS = {
                    5.1: "XP",
                    "6.0": "Vista",
                    6.1: "7",
                    6.2: "8",
                    6.3: "8.1",
                    "10.0": "10"
                },
                f.REGEX_VERSION = "([\\d,.]+)",
                f.REGEX_VERSION_MAC = "([\\d,_,.]+)",
                f.UNKNOWN_VERSION = "Unknown",
                f.DEVICE_ID_COOKIE = "MicrosoftApplicationsTelemetryDeviceId",
                f.FIRST_LAUNCH_TIME_COOKIE = "MicrosoftApplicationsTelemetryFirstLaunchTime",
                f._deleteCookie = function(e) {
                    "undefined" != typeof document && void 0 !== document.cookie && (document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;")
                }
                ,
                f._disableCookies = !1,
                function(e) {
                    e[e.STARTED = 0] = "STARTED",
                    e[e.ENDED = 1] = "ENDED"
                }(u = t.SessionState || (t.SessionState = {}));
                var p = function() {
                    function e() {}
                    return e.initialize = function(t, a) {
                        if (!e._initialized) {
                            if (!t)
                                throw new d(o.INVALID_TENANT_TOKEN);
                            if (e._defaultToken = t,
                            e._tmConfig.collectorUrl = "https://browser.pipe.aria.microsoft.com/Collector/3.0/",
                            e._configuration = a,
                            !("undefined" != typeof window || a && a.browserOverrides && a.browserOverrides.onGetData))
                                throw new d(o.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET);
                            var i = null;
                            if (a)
                                if (a.collectorUrl && (e._tmConfig.collectorUrl = a.collectorUrl),
                                a.browserOverrides) {
                                    if (i = new r,
                                    a.browserOverrides.onGetData ? !a.browserOverrides.onSaveData : a.browserOverrides.onSaveData)
                                        throw new d(o.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET);
                                    i.onGetData = a.browserOverrides.onGetData,
                                    i.onSaveData = a.browserOverrides.onSaveData
                                } else
                                    a.disableCookies && (e._sessionEnabled = !1);
                            n.Initialize(e._tmConfig),
                            n.Start(),
                            f.initialize(i, a.disableCookies),
                            e._initialized = !0,
                            "undefined" != typeof window && window.addEventListener && (a && a.enableAutoUserSession && (e._logger = new m,
                            e._logger.logSession(u.STARTED)),
                            window.addEventListener("beforeunload", e._teardown))
                        }
                    }
                    ,
                    e.pauseTransmission = function() {
                        n.Pause()
                    }
                    ,
                    e.resumeTransmission = function() {
                        n.Resume()
                    }
                    ,
                    e.flush = function(e) {
                        n.Flush(e)
                    }
                    ,
                    e.addCallbackListener = function(t) {
                        e._initialized && n.AddListener(t)
                    }
                    ,
                    e.setContext = function(t, n, a) {
                        e._contextProperties.setProperty(t, n, a)
                    }
                    ,
                    e.isInitialized = function() {
                        return e._initialized
                    }
                    ,
                    e.getDefaultToken = function() {
                        return e._defaultToken
                    }
                    ,
                    e.getSemanticContext = function() {
                        return e._semanticContext
                    }
                    ,
                    e._getInitIdForToken = function(n) {
                        return e._initIdMap[n] || (e._initIdMap[n] = t.datamodels.utils.GetGuid()),
                        e._initIdMap[n]
                    }
                    ,
                    e._getSequenceForToken = function(t) {
                        return e._sequenceMap[t] || (e._sequenceMap[t] = 0),
                        e._sequenceMap[t]++,
                        e._sequenceMap[t]
                    }
                    ,
                    e._teardown = function() {
                        e._logger && e._logger.logSession(u.ENDED),
                        e.flush()
                    }
                    ,
                    e.__backToUninitialized = function() {
                        e._tmConfig = new t._sender.TelemetryConfig,
                        e._semanticContext = new l(!0),
                        e._contextProperties = new c,
                        e._configuration = null,
                        n = t._sender.TelemetryManagerFactory.CreateTelemetryManager(),
                        e._initialized = !1,
                        e._initIdMap = {},
                        e._sequenceMap = {}
                    }
                    ,
                    e
                }();
                p._initialized = !1,
                p._defaultToken = null,
                p._tmConfig = new t._sender.TelemetryConfig,
                p._logger = null,
                p._initIdMap = {},
                p._sequenceMap = {},
                p._configuration = null,
                p._contextProperties = new c,
                p._semanticContext = new l(!0),
                p._sessionEnabled = !0,
                t.LogManager = p;
                var m = function() {
                    function e(e) {
                        this._initId = null,
                        this._tenantToken = null,
                        this._contextProperties = new c,
                        this._semanticContext = new l(!1),
                        this._sessionStartTime = 0,
                        this._sessionId = null,
                        this._tenantToken = e || p.getDefaultToken(),
                        this._initId = p._getInitIdForToken(this._tenantToken)
                    }
                    return e.prototype.logEvent = function(e) {
                        if (!e.name)
                            throw new d(o.MISSING_EVENT_PROPERTIES_NAME);
                        var t = this._createEventRecord(e.name, e.eventType);
                        this._addPropertiesAndSendEvent(t, e)
                    }
                    ,
                    e.prototype.logFailure = function(e, t, n, a, i) {
                        if (!e)
                            throw new d(o.MISSING_FAILURE_SIGNATURE);
                        if (!t)
                            throw new d(o.MISSING_FAILURE_DETAIL);
                        var r = this._createEventRecord("failure", "failure");
                        r.Extension.Add("Failure.Signature", e),
                        r.Extension.Add("Failure.Detail", t),
                        n && r.Extension.Add("Failure.Category", n),
                        a && r.Extension.Add("Failure.Id", a),
                        this._addPropertiesAndSendEvent(r, i)
                    }
                    ,
                    e.prototype.logPageView = function(e, t, n, a, i, r) {
                        if (!e)
                            throw new d(o.MISSING_PAGEVIEW_ID);
                        if (!t)
                            throw new d(o.MISSING_PAGEVIEW_NAME);
                        var s = this._createEventRecord("pageview", "pageview");
                        s.Extension.Add("PageView.Id", e),
                        s.Extension.Add("PageView.Name", t),
                        n && s.Extension.Add("PageView.Category", n),
                        a && s.Extension.Add("PageView.Uri", a),
                        i && s.Extension.Add("PageView.ReferrerUri", i),
                        this._addPropertiesAndSendEvent(s, r)
                    }
                    ,
                    e.prototype.logSession = function(e, n) {
                        if (p._sessionEnabled) {
                            if (e !== u.STARTED && e !== u.ENDED)
                                throw new d(o.INVALID_SESSION_STATE);
                            var a = this._createEventRecord("session", "session");
                            if (e === u.STARTED) {
                                if (this._sessionStartTime > 0)
                                    return;
                                this._sessionStartTime = (new Date).getTime(),
                                this._sessionId = t.datamodels.utils.GetGuid(),
                                a.Extension.Add("Session.Id", this._sessionId),
                                a.Extension.Add("Session.State", "Started")
                            } else if (e === u.ENDED) {
                                if (0 == this._sessionStartTime)
                                    return;
                                var i = Math.floor(((new Date).getTime() - this._sessionStartTime) / 1e3);
                                a.Extension.Add("Session.Duration", i.toString()),
                                a.Extension.Add("Session.DurationBucket", this._getSessionDurationFromTime(i)),
                                a.Extension.Add("Session.Id", this._sessionId),
                                a.Extension.Add("Session.State", "Ended"),
                                this._sessionId = null,
                                this._sessionStartTime = 0
                            }
                            a.Extension.Add("Session.FirstLaunchTime", this._getISOString(new Date(f.firstLaunchTime))),
                            this._addPropertiesAndSendEvent(a, n)
                        }
                    }
                    ,
                    e.prototype.getSessionId = function() {
                        return this._sessionId
                    }
                    ,
                    e.prototype.setContext = function(e, t, n) {
                        this._contextProperties.setProperty(e, t, n)
                    }
                    ,
                    e.prototype.getSemanticContext = function() {
                        return this._semanticContext
                    }
                    ,
                    e.prototype._getSessionDurationFromTime = function(e) {
                        return e < 0 ? "Undefined" : e <= 3 ? "UpTo3Sec" : e <= 10 ? "UpTo10Sec" : e <= 30 ? "UpTo30Sec" : e <= 60 ? "UpTo60Sec" : e <= 180 ? "UpTo3Min" : e <= 600 ? "UpTo10Min" : e <= 1800 ? "UpTo30Min" : "Above30Min"
                    }
                    ,
                    e.prototype._createEventRecord = function(e, n) {
                        var i = new t.datamodels.Record;
                        n || (n = "custom"),
                        i.EventType = e.toLowerCase(),
                        i.Type = n.toLowerCase(),
                        i.Extension.Add("EventInfo.Source", "JS_default_source"),
                        i.Extension.Add("EventInfo.InitId", this._initId),
                        i.Extension.Add("EventInfo.Sequence", p._getSequenceForToken(this._tenantToken).toString()),
                        i.Extension.Add("EventInfo.Name", e.toLowerCase());
                        var r = new Date;
                        return i.Timestamp = t.datamodels.utils.GetTimeStampWithValue(r.getTime()),
                        i.Extension.Add("EventInfo.Time", this._getISOString(r)),
                        i.Extension.Add("EventInfo.SdkVersion", "ACT-Web-JS-" + a.version),
                        i
                    }
                    ,
                    e.prototype._getISOString = function(e) {
                        function t(e) {
                            return e < 10 ? "0" + e : e.toString()
                        }
                        return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds()) + "." + function(e) {
                            return e < 10 ? "00" + e : e < 100 ? "0" + e : e.toString()
                        }(e.getUTCMilliseconds()) + "Z"
                    }
                    ,
                    e.prototype._addCustomPropertiesToEvent = function(e, t) {
                        this._addSemanticContext(e, f.semanticContext),
                        this._addSemanticContext(e, p._semanticContext),
                        this._addSemanticContext(e, this._semanticContext),
                        this._sessionId && e.Extension.Add("Session.Id", this._sessionId),
                        this._addEventPropertiesToEvent(e, p._contextProperties),
                        this._addEventPropertiesToEvent(e, this._contextProperties),
                        this._addEventPropertiesToEvent(e, t)
                    }
                    ,
                    e.prototype._addSemanticContext = function(e, n) {
                        if (n && n.contextMap) {
                            var a = n.contextMap;
                            for (var i in n.contextMap)
                                "UserInfo.Id" == i && n.piiKind != t.datamodels.PIIKind.NotSet ? e.AddOrReplacePII(i, a[i], n.piiKind) : e.Extension.AddOrReplace(i, a[i])
                        }
                    }
                    ,
                    e.prototype._addEventPropertiesToEvent = function(e, n) {
                        if (n) {
                            n.timestamp && n.timestamp >= new Date("1/1/2000").getTime() && (e.Timestamp = t.datamodels.utils.GetTimeStampWithValue(n.timestamp),
                            e.Extension.AddOrReplace("EventInfo.Time", this._getISOString(new Date(n.timestamp)))),
                            n.name && (e.EventType = n.name.toLowerCase(),
                            e.Extension.AddOrReplace("EventInfo.Name", n.name.toLowerCase()));
                            var a = n.properties;
                            if (a)
                                for (var i in a)
                                    i && (a[i].value || !1 === a[i].value || 0 == a[i].value || "" == a[i].value) && (s._isPii(a[i].pii) ? (e.AddOrReplacePII(i, a[i].value.toString(), a[i].pii),
                                    e.Extension.Remove(i)) : (e.Extension.AddOrReplace(i, a[i].value.toString()),
                                    e.PIIExtensions.Remove(i)))
                        }
                    }
                    ,
                    e.prototype._addPropertiesAndSendEvent = function(e, t) {
                        this._addCustomPropertiesToEvent(e, t),
                        p.isInitialized() && (this._sanitizeName(e),
                        n.SendAsync(this._tenantToken, [e]))
                    }
                    ,
                    e.prototype._sanitizeName = function(e) {
                        var t = e.EventType.replace(/\./g, "_");
                        e.EventType = t,
                        e.Extension.AddOrReplace("EventInfo.Name", t)
                    }
                    ,
                    e
                }();
                t.Logger = m
            }((t = e.applications || (e.applications = {})).telemetry || (t.telemetry = {}))
        }(o || (o = {})),
        e.exports = o.applications.telemetry,
        e.exports = o.applications.telemetry
    }
}]);
