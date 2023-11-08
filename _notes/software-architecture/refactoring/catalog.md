---
title: "Refactoring Catalog"
layout: notes
---

# [Catalog](https://www.refactoring.com)
* Collected by Fowler
* Refactoring entry composed of:
    * Name
    * Summary
    * Motivation
    * Mechanics
    * Examples

* 1st editon in Java and 2nd edition in JavaScript, but applicable to any OO language, and even to non-OO languages
* Online catalog at: [https://www.refactoring.com](https://www.refactoring.com)

# Categories
* Composing Methods
* Organizing Data
* Moving Features Between Objects
* Simplifying Conditional Expressions
* Simplifying Method Calls
* Dealing with Generalization
* Big Refactorings

# Extract Function - Before
<script src="https://gist.github.com/mjdecker/ee50eeb88bce122cee97c0e187d23b4e.js?file=extract-function-before.cpp"></script>

# Extract Function - After
<script src="https://gist.github.com/mjdecker/ee50eeb88bce122cee97c0e187d23b4e.js?file=extract-function-after.cpp"></script>

# Replace Conditional with Polymorphism - Before
<script src="https://gist.github.com/mjdecker/ee50eeb88bce122cee97c0e187d23b4e.js?file=replace-conditional-with-polymorphism-before.cpp"></script>


# Replace Conditional with Polymorphism (after)
<img src="http://yuml.me/diagram/class/[｛abstract｝bird|%20|%20+%20get_speed():number｛abstract｝],[european|%20|%20+%20get_speed():real],[african|%20|%20+%20get_speed():real],[norwegian_blue|%20|%20+%20get_speed():real],[｛abstract｝bird]^-[european],[｛abstract｝bird]^-[african],[｛abstract｝bird]^-[norwegian_blue]" alt="Replace Conditional with Polymorphism example"/>

# Change Bidirectional Association to Unidirectional

* Before

![](http://yuml.me/diagram/class/[order]<*-1%3e[customer])

* After

![](http://yuml.me/diagram/class/[order]<*-1[customer])

# Extract Class

* Before

![](http://yuml.me/diagram/class/[person|%20+name:string;%20office_area_code:integer;%20office_number:integer|%20])

* After

![](http://yuml.me/diagram/class/[person|%20+name:string|%20]office_telephone-1%3e[telephone_number|%20area_code:integer;%20number:integer])

# Separate Query from Modifier

* Before

<img src="http://yuml.me/diagram/class/[customer|%20|%20+%20get_total_outstanding_and_set_ready_for_summaries()%20:%20integer]" alt="Separate Query from Modifier before example"/>


* After

<img src="http://yuml.me/diagram/class/[customer|%20|%20+%20get_total_outstanding()%20:%20integer;%20+%20set_ready_for_summaries()%20:%20integer]" alt="Separate Query from Modifier after example"/>

# Extract Interface

* Before

<img src="http://yuml.me/diagram/class/[employee|%20|%20+%20get_rate()%20:%20integer;%20+%20has_special_skill()%20:%20boolean;%20+%20get_name()%20:%20string;%20+%20get_department()%20:%20department]" alt="Extract Interface before example"/>

* After

<img src="http://yuml.me/diagram/class/[billable|%20|%20+%20get_rate()%20:%20integer｛abstract｝;%20+%20has_special_skill()%20:%20boolean｛abstract｝]^-.-[employee|%20|%20+%20get_rate()%20:%20integer;%20+%20has_special_skill()%20:%20boolean;%20+%20get_name()%20:%20string;%20+%20get_department()%20:%20department]" alt="Extract Interface after example"/>

# Composing Methods
* [Extract Function](http://www.refactoring.com/catalog/extractMethod.html)
* [Inline Function](http://www.refactoring.com/catalog/inlineMethod.html)
* [Inline Variable](http://www.refactoring.com/catalog/inlineTemp.html)
* [Replace Temp with Query](http://www.refactoring.com/catalog/replaceTempWithQuery.html)
* [Extract Variable](https://refactoring.com/catalog/extractVariable.html)
* [Split Variable](https://refactoring.com/catalog/splitVariable.html)
* [Replace Function with Command](https://refactoring.com/catalog/replaceFunctionWithCommand.html)
* [Substitute Algorithm](http://www.refactoring.com/catalog/substituteAlgorithm.html)

# Simplifying Conditional Expr.
* [Decompose Conditional](http://www.refactoring.com/catalog/decomposeConditional.html)
* [Consolidate Conditional Expression](http://www.refactoring.com/catalog/consolidateConditionalExpression.html)
* [Consolidate Duplicate Conditional Fragments](http://www.refactoring.com/catalog/consolidateDuplicateConditionalFragments.html)
* [Replace Control Flag with Break](https://refactoring.com/catalog/replaceControlFlagWithBreak.html)
* [Replace Nested Conditional with Guard Clauses](http://www.refactoring.com/catalog/replaceNestedConditionalWithGuardClauses.html)
* [Replace Conditional with Polymorphism](http://www.refactoring.com/catalog/replaceConditionalWithPolymorphism.html)
* [Introduce Special Case](https://refactoring.com/catalog/introduceSpecialCase.html)
* [Introduce Assertion](http://www.refactoring.com/catalog/introduceAssertion.html)

# Organizing Data I
* [Replace Primitive with Object](https://refactoring.com/catalog/replacePrimitiveWithObject.html)
* [Change Value to Reference](http://www.refactoring.com/catalog/changeValueToReference.html)
* [Change Reference to Value](http://www.refactoring.com/catalog/changeReferenceToValue.html)
* [Replace Array with Object](http://www.refactoring.com/catalog/replaceArrayWithObject.html)
* [Duplicate Observed Data](http://www.refactoring.com/catalog/duplicateObservedData.html)
* [Change Unidirectional Association to Bidirectional](http://www.refactoring.com/catalog/changeUnidirectionalAssociationToBidirectional.html)
* [Change Bidirectional Association to Unidirectional](http://www.refactoring.com/catalog/changeBidirectionalAssociationToUnidirectional.html)

# Organizing Data II
* [Replace Magic Literal](https://refactoring.com/catalog/replaceMagicLiteral.html)
* [Encapsulate Variable](https://refactoring.com/catalog/encapsulateVariable.html)
* [Encapsulate Collection](http://www.refactoring.com/catalog/encapsulateCollection.html)
* [Encapsulate Record](https://refactoring.com/catalog/encapsulateRecord.html)
* [Replace Type Code with Subclasses](http://www.refactoring.com/catalog/replaceTypeCodeWithSubclasses.html)
* [Remove Subclass](https://refactoring.com/catalog/removeSubclass.html)

# Moving Object Features
* [Move Function](http://www.refactoring.com/catalog/moveFunction.html)
* [Move Field](http://www.refactoring.com/catalog/moveField.html)
* [Extract Class](http://www.refactoring.com/catalog/extractClass.html)
* [Inline Class](http://www.refactoring.com/catalog/inlineClass.html)
* [Hide Delegate](http://www.refactoring.com/catalog/hideDelegate.html)
* [Remove Middle Man](http://www.refactoring.com/catalog/removeMiddleMan.html)
* [Introduce Foreign Method](http://www.refactoring.com/catalog/introduceForeignMethod.html)
* [Introduce Local Extension](http://www.refactoring.com/catalog/introduceLocalExtension.html)

# Simplifying Method Calls I

* [Change Function Declaration](https://refactoring.com/catalog/changeFunctionDeclaration.html)
* [Separate Query from Modifier](http://www.refactoring.com/catalog/separateQueryFromModifier.html)
* [Parameterize Method](http://www.refactoring.com/catalog/parameterizeMethod.html)
* [Remove Flag Argument](https://refactoring.com/catalog/removeFlagArgument.html)
* [Preserve Whole Object](http://www.refactoring.com/catalog/preserveWholeObject.html)
* [Replace Parameter with Query](http://www.refactoring.com/catalog/replaceParameterWithQuery.html)

# Simplying Method Calls II
* [Introduce Parameter Object](http://www.refactoring.com/catalog/introduceParameterObject.html)
* [Remove Setting Method](http://www.refactoring.com/catalog/removeSettingMethod.html)
* [Hide Method](http://www.refactoring.com/catalog/hideMethod.html)
* [Replace Constructor with Factory Function](http://www.refactoring.com/catalog/replaceConstructorWithFactoryFunction.html)
* [Encapsulate Downcast](http://www.refactoring.com/catalog/encapsulateDowncast.html)
* [Replace Error Code with Exception](http://www.refactoring.com/catalog/replaceErrorCodeWithException.html)
* [Replace Exception with Precheck](https://refactoring.com/catalog/replaceExceptionWithPrecheck.html)

# Dealing with Generalization
* [Pull Up Field](http://www.refactoring.com/catalog/pullUpField.html)
* [Pull Up Method](http://www.refactoring.com/catalog/pullUpMethod.html)
* [Pull Up Constructor Body](http://www.refactoring.com/catalog/pullUpConstructorBody.html)
* [Push Down Method](http://www.refactoring.com/catalog/pushDownMethod.html)
* [Push Down Field](http://www.refactoring.com/catalog/pushDownField.html)
* [Extract Superclass](http://www.refactoring.com/catalog/extractSuperclass.html)
* [Extract Interface](http://www.refactoring.com/catalog/extractInterface.html)

# Dealing with Generalization II
* [Collapse Hierarchy](http://www.refactoring.com/catalog/collapseHierarchy.html)
* [Form Template Method](http://www.refactoring.com/catalog/formTemplateMethod.html)
* [Replace Superclass with Delegate](https://refactoring.com/catalog/replaceSuperclassWithDelegate.html)
* [Replace Delegation with Inheritance](http://www.refactoring.com/catalog/replaceDelegationWithInheritance.html)

