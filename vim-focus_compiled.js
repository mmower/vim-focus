if(!lt.util.load.provided_QMARK_('lt.plugins.vim-focus')) {
goog.provide('lt.plugins.vim_focus');
goog.require('cljs.core');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');

/**
* Given LT editor object e, return its corresponding CodeMirror
* HTMLTextArea DOM element
*/
lt.plugins.vim_focus.editor__GT_textarea = (function editor__GT_textarea(e){var elem = lt.objs.editor.__GT_elem.call(null,e);var div = cljs.core.first.call(null,elem.children);var text = cljs.core.first.call(null,div.children);return text;
});

/**
* Given LT editor object e, return true if it is a vim editor in insert mode
*/
lt.plugins.vim_focus.vim_insert_editor_QMARK_ = (function vim_insert_editor_QMARK_(e){return cljs.core._EQ_.call(null,"vim-insert",lt.objs.editor.option.call(null,e,new cljs.core.Keyword(null,"keyMap","keyMap",4174180847)));
});

/**
* Given a CodeMirror HTMLTextArea DOM element elem send it an event
* corresponding to the user pressing escape
*/
lt.plugins.vim_focus.send_escape_key = (function send_escape_key(elem){var evt = document.createEvent("Events");evt.initEvent("keydown",lt.plugins.vim_focus.rue,true);
evt.keyCode = 27;
evt.which = 27;
return elem.dispatchEvent(evt);
});

/**
* Return a sequence of LT editor objects that are in vim insert mode
*/
lt.plugins.vim_focus.target_editors = (function target_editors(){return cljs.core.filter.call(null,lt.plugins.vim_focus.vim_insert_editor_QMARK_,lt.objs.editor.pool.get_all.call(null));
});

/**
* Given an LT editor object e, send it an emulated escape keypress to return
* it to vim normal mode
*/
lt.plugins.vim_focus.escape_to_normal_mode = (function escape_to_normal_mode(e){return lt.plugins.vim_focus.send_escape_key.call(null,lt.plugins.vim_focus.editor__GT_textarea.call(null,e));
});

/**
* Switch any LT editors in vim insert mode to normal mode
*/
lt.plugins.vim_focus.switch_vim_editors_to_normal_mode = (function switch_vim_editors_to_normal_mode(){var seq__8935 = cljs.core.seq.call(null,lt.plugins.vim_focus.target_editors.call(null));var chunk__8936 = null;var count__8937 = 0;var i__8938 = 0;while(true){
if((i__8938 < count__8937))
{var e = cljs.core._nth.call(null,chunk__8936,i__8938);lt.plugins.vim_focus.escape_to_normal_mode.call(null,e);
{
var G__8939 = seq__8935;
var G__8940 = chunk__8936;
var G__8941 = count__8937;
var G__8942 = (i__8938 + 1);
seq__8935 = G__8939;
chunk__8936 = G__8940;
count__8937 = G__8941;
i__8938 = G__8942;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8935);if(temp__4092__auto__)
{var seq__8935__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8935__$1))
{var c__8206__auto__ = cljs.core.chunk_first.call(null,seq__8935__$1);{
var G__8943 = cljs.core.chunk_rest.call(null,seq__8935__$1);
var G__8944 = c__8206__auto__;
var G__8945 = cljs.core.count.call(null,c__8206__auto__);
var G__8946 = 0;
seq__8935 = G__8943;
chunk__8936 = G__8944;
count__8937 = G__8945;
i__8938 = G__8946;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__8935__$1);lt.plugins.vim_focus.escape_to_normal_mode.call(null,e);
{
var G__8947 = cljs.core.next.call(null,seq__8935__$1);
var G__8948 = null;
var G__8949 = 0;
var G__8950 = 0;
seq__8935 = G__8947;
chunk__8936 = G__8948;
count__8937 = G__8949;
i__8938 = G__8950;
continue;
}
}
} else
{return null;
}
}
break;
}
});

lt.plugins.vim_focus.__BEH__lt_focus_lost = (function __BEH__lt_focus_lost(this$){return lt.plugins.vim_focus.switch_vim_editors_to_normal_mode.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim-focus","lt-focus-lost","lt.plugins.vim-focus/lt-focus-lost",3577787435),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vim_focus.__BEH__lt_focus_lost,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blur","blur",1016931289),null], null), null));

}

//# sourceMappingURL=