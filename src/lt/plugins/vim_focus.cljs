(ns lt.plugins.vim-focus
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.console :as console]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn editor->textarea
  "Given LT editor object e, return its corresponding CodeMirror
  HTMLTextArea DOM element"
  [e]
  (let [elem (editor/->elem e)
        div (first (.-children elem))
        text (first (.-children div))]
    text))

(defn vim-insert-editor?
  "Given LT editor object e, return true if it is a vim editor in insert mode"
  [e]
  (= "vim-insert" (editor/option e :keyMap)))

(defn send-escape-key
  "Given a CodeMirror HTMLTextArea DOM element elem send it an event
  corresponding to the user pressing escape"
  [elem]
  (let [evt (js/document.createEvent "Events")]
    (.initEvent evt "keydown" rue true)
    (set! (.-keyCode evt) 27)
    (set! (.-which evt) 27)
    (.dispatchEvent elem evt)))

(defn target-editors
  "Return a sequence of LT editor objects that are in vim insert mode"
  []
  (filter vim-insert-editor? (pool/get-all)))

(defn escape-to-normal-mode
  "Given an LT editor object e, send it an emulated escape keypress to return
  it to vim normal mode"
  [e]
  (send-escape-key (editor->textarea e)))

(defn switch-vim-editors-to-normal-mode
  "Switch any LT editors in vim insert mode to normal mode"
  []
  (doseq [e (target-editors)]
    (escape-to-normal-mode e)))

(behavior ::lt-focus-lost
          :triggers #{:blur}
          :reaction (fn [this]
                      (switch-vim-editors-to-normal-mode)))
