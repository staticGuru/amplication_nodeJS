/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { DemoWhereUniqueInput } from "./DemoWhereUniqueInput";
import { DemoUpdateInput } from "./DemoUpdateInput";

@ArgsType()
class UpdateDemoArgs {
  @Field(() => DemoWhereUniqueInput, { nullable: false })
  where!: DemoWhereUniqueInput;
  @Field(() => DemoUpdateInput, { nullable: false })
  data!: DemoUpdateInput;
}

export { UpdateDemoArgs as UpdateDemoArgs };