#!/bin/sh
# TAIL SKIPS SHEBANG SECTION, CAT JOINS FILE LINES, JSC EXECUTES IT, AWK PRETTIFIES ERROR MESSAGES
tail -n +5 "$0" | "/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc" -e "if (typeof console === 'undefined') var console = {log:print}; $(cat)" 2>&1 | awk "/Exception:/{p=1} p&&/:/{sub(/^[^@]*(@?).*\\//, \"\\❗️ \")} {print}"
exit
/*************************************************************************************************************************/

const dependencies = [
	'files/file1.js',
	'files/file2.js',
	'files/file3.js',
]

;dependencies.forEach( path => load(path) )

console.log(`

	// JavaScriptCore commands

	debug
	print
	load
	read
	quit

	describe
	describeArray
	printErr
	gc
	fullGC
	edenGC
	forceGCSlowPaths
	gcHeapSize
	run
	runString
	loadString
	readFile
	readline
	noInline
	noDFG
	noFTL
	noOSRExitFuzzing
	numberOfDFGCompiles
	jscOptions
	optimizeNextInvocation
	reoptimizationRetryCount
	transferArrayBuffer
	failNextNewCodeBlock

`)
