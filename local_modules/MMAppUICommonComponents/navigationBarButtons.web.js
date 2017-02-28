// Copyright (c) 2014-2017, MyMonero.com
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//	conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//	of conditions and the following disclaimer in the documentation and/or other
//	materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//	used to endorse or promote products derived from this software without specific
//	prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
"use strict"
//
const View = require('../Views/View.web')
const BarButtonBaseView = require('../StackNavigation/Views/BarButtonBaseView.web')
const commonComponents_hoverableCells = require('./hoverableCells.web')
//	
function _New_ButtonBase_View(context)
{
	const view = new BarButtonBaseView({}, context)
	view.SetEnabled(true)
	view.layer.classList.add(commonComponents_hoverableCells.ClassFor_HoverableCell())
	return view
}
exports.New_ButtonBase_View = _New_ButtonBase_View
//
function New_GreyButtonView(context)
{
	const view = _New_ButtonBase_View(context)
	const layer = view.layer
	layer.classList.add(commonComponents_hoverableCells.ClassFor_GreyCell())
	layer.style.height = "24px"
	layer.style.borderRadius = "3px"
	layer.style.boxShadow = "0 0.5px 1px 0 #161416, inset 0 0.5px 0 0 #494749"
	layer.style.backgroundColor = "#383638"
	layer.style.border = "none"
	layer.style.textDecoration = "none"
	layer.style.fontSize = "13px"
	layer.style.fontFamily = context.themeController.FontFamily_sansSerif()
	layer.style.lineHeight = "24px"
	layer.style.color = "#FCFBFC"
	layer.style.fontWeight = "500"
	layer.style.textAlign = "center"
	return view
}
exports.New_GreyButtonView = New_GreyButtonView
//
function New_BlueButtonView(context)
{
	const view = _New_ButtonBase_View(context)
	const layer = view.layer
	layer.classList.add(commonComponents_hoverableCells.ClassFor_BlueCell())
	layer.style.height = "24px"
	layer.style.borderRadius = "3px"
	layer.style.backgroundColor = "#00c6ff"
	layer.style.boxShadow = "inset 0 0.5px 0 0 rgba(255,255,255,0.20)"
	layer.style.color = "#161416"
	layer.style.border = "none"
	layer.style.textDecoration = "none"
	layer.style.fontSize = "13px"
	layer.style.fontFamily = context.themeController.FontFamily_sansSerif()
	layer.style.lineHeight = "24px"
	layer.style.fontWeight = "500"
	layer.style.textAlign = "center"
	return view
}
function New_RightSide_AddButtonView(context)
{
	const view = New_BlueButtonView(context)
	const layer = view.layer
	layer.innerHTML = "+" // TODO: image
	layer.style.float = "right" // so it sticks to the right of the right btn holder view layer
	layer.style.marginTop = "10px"
	layer.style.width = layer.style.height
	return view
}
exports.New_RightSide_AddButtonView = New_RightSide_AddButtonView
//
function New_LeftSide_CancelButtonView(context, title_orUndefinedForDefaultCancel)
{
	const view = New_GreyButtonView(context)
	const layer = view.layer
	const title = 
		typeof title_orUndefinedForDefaultCancel === "undefined" 
			|| title_orUndefinedForDefaultCancel === null 
			|| title_orUndefinedForDefaultCancel === "" 
		? "Cancel" : title_orUndefinedForDefaultCancel
	layer.innerHTML = title
	//
	layer.style.display = "block"
	layer.style.float = "right" // so it sticks to the right of the right btn holder view layer
	layer.style.marginTop = "10px"
	layer.style.width = "60px"
	//
	return view
}
exports.New_LeftSide_CancelButtonView = New_LeftSide_CancelButtonView
//
function New_RightSide_SaveButtonView(context)
{
	const view = New_BlueButtonView(context)
	const layer = view.layer
	layer.innerHTML = "Save"
	layer.style.float = "right" // so it sticks to the right of the right btn holder view layer
	layer.style.marginTop = "10px"
	layer.style.width = "68px"
	return view
}
exports.New_RightSide_SaveButtonView = New_RightSide_SaveButtonView
//
function New_RightSide_EditButtonView(context)
{
	const view = New_GreyButtonView(context)
	const layer = view.layer
	layer.innerHTML = "Edit"
	layer.style.display = "block"
	layer.style.float = "right" // so it sticks to the right of the right btn holder view layer
	layer.style.marginTop = "10px"
	layer.style.width = "41px"
	return view	
}
exports.New_RightSide_EditButtonView = New_RightSide_EditButtonView
//
function New_RightSide_ValueDisplayLabelButtonView(context)
{
	const view = _New_ButtonBase_View(context)
	const layer = view.layer
	{ // setup/style
		layer.href = "" // to make it non-clickable
		layer.style.display = "block"
		layer.style.float = "right" // so it sticks to the right of the right btn holder view layer
		layer.style.marginTop = "12px"
		layer.style.width = "auto"
		layer.style.height = "auto"
		layer.style.textDecoration = "none"
		layer.style.fontSize = "10px" // design is 11 but chrome renders too big, simulating
		layer.style.letterSpacing = "0.5px"
		layer.style.fontWeight = "500"
		layer.style.fontFamily = context.themeController.FontFamily_monospace()
		layer.style.color = "#9E9C9E"
		layer.style.lineHeight = "200%" // % extra to get + aligned properly
		layer.style.textAlign = "center"
		layer.style.cursor = "default"
	}
	return view	
}
exports.New_RightSide_ValueDisplayLabelButtonView = New_RightSide_ValueDisplayLabelButtonView