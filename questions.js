let quiz= 
[
    {
        q: "Quels sont les types de nombres définis en JavaScript ?",
        a: [
            {text:"integer et float", iscorrect:false},
            {text:"Number", iscorrect:true},
            {text:"Number et Double", iscorrect:false},
            {text:"Number et Integer", iscorrect:false}
            ]
    },
    {

        q: "Que signifie l'acronyme AJAX ?",
        a: [
            {text:"Advanced JavaScript with XMLHttpRequest", iscorrect:false},
            {text:"Asynchronous JavaScript and XML", iscorrect:true},
            {text:"JavaScript extensible.", iscorrect:false},
            {text:"Available Javascript array X", iscorrect:false}
            ]
    }
    ,
    {

        q: "Quel est l'équivalent pour un noeud de l'arbre DOM de node.childNodes[1]",
        a: [
            {text:"node.firstChild", iscorrect:false},
            {text:"node.firstChild.nextSibling", iscorrect:true},
            {text:"node.previousSibling.parentNode", iscorrect:false},
            {text:"node.lastChild.previousSibling", iscorrect:false}
            ]
    },
    {

        q: "Quelle syntaxe est correcte pour que la fonction init soit appelée au chargement de la page ?",
        a: [
            {text:"window.onload = init", iscorrect:true},
            {text:"window.onload = init()", iscorrect:false},
            {text:"window.onload() = init;", iscorrect:false},
            {text:"window.onload() = init();", iscorrect:false}
            ]
    },
    {

        q: "Peut-on accéder aux commentaires d'un document HTML ?",
        a: [
            {text:"Non, ce n'est pas possible", iscorrect:false},
            {text:"Oui, avec document.body.comments", iscorrect:false},
            {text:"Oui, avec node.nodeType évalué à 7", iscorrect:false},
            {text:"Oui, avec Node.COMMENT_NODE ", iscorrect:true}
            ]
    },
    {

        q: "Lequel de ces codes n’affichera pas 3 ",
        a: [
            {text:"alert(Math.max(-4, 3))", iscorrect:false},
            {text:"var i = 3; alert(i++)", iscorrect:false},
            {text:"alert(parseInt('3'));", iscorrect:false},
            {text:"alert(Math.floor(2.9))", iscorrect:true}
            ]
    },
    {

        q: "Quel est l'équivalent de homme.taille? ",
        a: [
            {text:"homme[taille]", iscorrect:false},
            {text:"homme['taille']", iscorrect:true},
            {text:"homme.getTaille()", iscorrect:false},
            {text:"TailleOfHomme", iscorrect:false}
            ]
    },
    {

        q: "Laquelle de ces expressions est évaluée à false ? ",
        a: [
            {text:"'Infinity' == Infinity", iscorrect:false},
            {text:"NaN == NaN", iscorrect:true},
            {text:"'0xa' == 10", iscorrect:false},
            {text:"{'valueOf': function() {return 2;}} == 2", iscorrect:false}
            ]
    },
    {

        q: "Quelle est la méthode spécifiée dans le DOM-2 pour l'ajout des gestionnaires d'événements ? ",
        a: [
            {text:"addEventListen", iscorrect:false},
            {text:"attachEvent", iscorrect:true},
            {text:"addEventListener", iscorrect:true},
            {text:"listen", iscorrect:false}
            ]
    },
    {

        q: "Quel est le résultat de parseInt('010',8) ?",
        a: [
            {text:"1", iscorrect:false},
            {text:"2", iscorrect:false},
            {text:"8", iscorrect:true},
            {text:"10", iscorrect:false}
            ]
    },
          
]