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
lt.plugins.vim_focus.switch_vim_editors_to_normal_mode = (function switch_vim_editors_to_normal_mode(){var seq__9259 = cljs.core.seq.call(null,lt.plugins.vim_focus.target_editors.call(null));var chunk__9260 = null;var count__9261 = 0;var i__9262 = 0;while(true){
if((i__9262 < count__9261))
{var e = cljs.core._nth.call(null,chunk__9260,i__9262);lt.plugins.vim_focus.escape_to_normal_mode.call(null,e);
{
var G__9263 = seq__9259;
var G__9264 = chunk__9260;
var G__9265 = count__9261;
var G__9266 = (i__9262 + 1);
seq__9259 = G__9263;
chunk__9260 = G__9264;
count__9261 = G__9265;
i__9262 = G__9266;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9259);if(temp__4092__auto__)
{var seq__9259__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9259__$1))
{var c__8206__auto__ = cljs.core.chunk_first.call(null,seq__9259__$1);{
var G__9267 = cljs.core.chunk_rest.call(null,seq__9259__$1);
var G__9268 = c__8206__auto__;
var G__9269 = cljs.core.count.call(null,c__8206__auto__);
var G__9270 = 0;
seq__9259 = G__9267;
chunk__9260 = G__9268;
count__9261 = G__9269;
i__9262 = G__9270;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__9259__$1);lt.plugins.vim_focus.escape_to_normal_mode.call(null,e);
{
var G__9271 = cljs.core.next.call(null,seq__9259__$1);
var G__9272 = null;
var G__9273 = 0;
var G__9274 = 0;
seq__9259 = G__9271;
chunk__9260 = G__9272;
count__9261 = G__9273;
i__9262 = G__9274;
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

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim-focus","vim-focus.hello","lt.plugins.vim-focus/vim-focus.hello",3428547992),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vim-focus.hello","vim-focus.hello",1522126459)], null),new cljs.core.Keyword(null,"name","name",1017277949),"vim-focus",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return null;
}));

lt.plugins.vim_focus.vim_focus = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.vim-focus","vim-focus.hello","lt.plugins.vim-focus/vim-focus.hello",3428547992));

}

//# sourceMappingURL=