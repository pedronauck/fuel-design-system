import { BoxCentered, Button, Stack, Input, Card, Flex } from "@fuels-ui/react";
import { InputElementRight } from "@fuels-ui/react/src/components/Input/InputElement";
import { InputField } from "@fuels-ui/react/src/components/Input/InputField";
import { ChangeEvent, SyntheticEvent, useState } from "react";

export const CreateEscrow = () => {
    const [formState, setFormState] = useState({
        users: ["", ""],
        assets: [{
            assetId: "",
            assetAmount: ""
        }]
    });

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log(formState);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

    const handleAddUser = (event: any) => {
        setFormState({
            ...formState,
            users: [...(formState.users), ""]
        });
    }

    const handleRemoveUser = (userId: number) => {
        setFormState({
            ...formState,
            users: formState.users.filter((user, i) => {
                return i !== userId;
            })
        });
    }

    const handleAddAsset = () => {
        setFormState({
            ...formState,
            assets: [...(formState.assets), { assetId: "", assetAmount: "" }]
        });
    }

    return (
        <Flex css={{ flex: "1", justifyContent: "center" }}>
            <Card css={{ margin: "10px", bg: "$gray7", marginTop: "50px" }}>
                <form onSubmit={handleSubmit}>
                    <Stack css={{ width: "475px", margin: "10px", alignItems: "center" }}>
                        {formState.users.map((user, i) => (
                            <Input css={{ alignSelf: "stretch" }} >
                                <InputField
                                    id={`user${i}`}
                                    name={`user${i}`}
                                    placeholder={`User ${i} Address`}
                                    type="text"
                                    onChange={handleChange}
                                    css={{ font: "$sans" }}
                                />
                                <InputElementRight>
                                    <Button color="tomato" leftIcon="DividerHorizontalIcon" onPress={() => handleRemoveUser(i)} />
                                </InputElementRight>
                            </Input>
                        ))}
                        <Button leftIcon="PlusIcon" css={{ font: "$sans", width: "50%" }} onPress={handleAddUser}>Add User</Button>
                        {formState.assets.map((asset, i) => (
                            <>
                                <Input css={{ alignSelf: "stretch" }}>
                                    <InputField
                                        id={`assetId${i}`}
                                        name={`assetId${i}`}
                                        placeholder={`Asset ${i} Id`}
                                        type="text"
                                        onChange={handleChange}
                                        css={{ font: "$sans" }}
                                    />
                                </Input>
                                <Input css={{ alignSelf: "stretch" }}>
                                    <InputField
                                        id={`assetAmount${i}`}
                                        name={`assetAmount${i}`}
                                        placeholder={`Asset ${i} Amount`}
                                        type="text"
                                        onChange={handleChange}
                                        css={{ font: "$sans" }}
                                    />
                                </Input>
                            </>
                        ))}
                        <Button leftIcon="PlusIcon" css={{ font: "$sans", width: "50%" }} onPress={handleAddAsset}>Add Asset</Button>
                        <Button type="submit" leftIcon="PlusIcon" css={{ font: "$sans", alignSelf: "stretch" }}>Create Escrow</Button>
                    </Stack>
                </form>
            </Card>
        </Flex>
    );
}