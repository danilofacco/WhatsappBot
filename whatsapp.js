const mce = ['mousedown', 'click', 'mouseup'];
function MouseClick(element) {
    mce.forEach(mouseEventType =>
        element.dispatchEvent(
            new MouseEvent(mouseEventType, {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1
            })
        )
    );
}


function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function EnviarMensagem(msg) {
    let ConversaFixada = getElementByXpath("//div[11]/div/div/div[2]")
    MouseClick(ConversaFixada)

    setTimeout(function () {
        let InputMsg = document.querySelectorAll("._1awRl")[1]
        InputMsg.dispatchEvent(new KeyboardEvent('keypress', { 'key': 'a' }))

        let EnviarBtn = document.querySelectorAll("._2Ujuu")[0]
        MouseClick(EnviarBtn)

    });
}

window.addEventListener("load", function (event) {
    setTimeout(function () {
        EnviarMensagem("teste");
    }, 3000);
})