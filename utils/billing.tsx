// Placeholder
import React, { useState } from "react";
import { Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { ViewContainerStatic } from "./container";
import { ViewTypographySubheading, ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";

export const ViewBillingSection = ({}) => {
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [selectedPlan2, setSelectedPlan2] = useState();

  const [plans, setPlans] = useState([
    {
      id: "free",
      name: "Free Plan",
      description: `
        Basic features for free:

        -> Basic feature 1
        -> Basic feature 2
        -> Basic feature 3
        -> Basic feature 4
        -> Basic feature 5
        -> Basic feature 6
      `,
      subscribed: true,
    },
    {
      id: "standard",
      name: "Standard Plan",
      description: `
      More features at $9.99/month:

      -> Standard feature 1
      -> Standard feature 2
      -> Standard feature 3
      -> Standard feature 4
      -> Standard feature 5
      -> Standard feature 6
      `,
      subscribed: false,
    },
    {
      id: "pro",
      name: "Pro Plan",
      description: `
      All features at $19.99/month:

      -> Pro feature 1
      -> Pro feature 2
      -> Pro feature 3
      -> Pro feature 4
      -> Pro feature 5
      -> Pro feature 6
      `,
      subscribed: false,
    },
  ]);

  const updateSubscription = (planId: any) => {
    const updatedPlans = plans.map((plan) => ({
      ...plan,
      subscribed: plan.id === planId ? true : false,
    }));

    setPlans(updatedPlans);
    hideModal();
  };

  const cancelSubscription = () => {
    const updatedPlans = plans.map((plan) => ({
      ...plan,
      subscribed: plan.id === "free" ? true : false,
    }));

    setPlans(updatedPlans);
  };

  const showModal = (planId: any) => {
    setModalVisible(true);

    // Additional logic for handling the modal content based on the planId
    const selectedPlan = plans.find((plan) => plan.id === planId);

    // Handle displaying specific details for each plan
    let content = `Details for ${selectedPlan?.name} Plan:\n\n${selectedPlan?.description}`;

    // Add more specific details or customize the modal content based on your needs
    // @ts-ignore
    setSelectedPlan2(selectedPlan);

    // Update the state with the specific modal content
    setModalContent(content);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <ViewContainerStatic style={styles.container}>
      {plans.map((plan) => (
        <ViewButtonPressable
          key={plan.id}
          style={[styles.card, selectedPlan === plan.id && styles.selectedCard]}
          onPress={() => showModal(plan.id)}
        >
          <ViewTypographyText selectable={false} style={styles.cardText}>
            {plan.name} {plan.subscribed ? "- subscribed" : ""}
          </ViewTypographyText>
        </ViewButtonPressable>
      ))}

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={hideModal}
      >
        <ViewContainerStatic style={styles.modalContainer}>
          <ViewTypographyText selectable={false}>
            {modalContent}
          </ViewTypographyText>
          <ViewButtonPressable
            style={[styles.subscribeButton]}
            onPress={() => {
              // @ts-ignore
              updateSubscription(selectedPlan2?.id);
              hideModal();
            }}
          >
            <ViewTypographyText
              selectable={false}
              style={styles.cancelButtonText}
            >
              Subscribe
            </ViewTypographyText>
          </ViewButtonPressable>
          <ViewButtonPressable style={styles.cancelButton} onPress={hideModal}>
            <ViewTypographyText
              selectable={false}
              style={styles.cancelButtonText}
            >
              Close
            </ViewTypographyText>
          </ViewButtonPressable>
        </ViewContainerStatic>
      </Modal>

      <ViewContainerStatic style={styles.cancelContainer}>
        <ViewButtonPressable
          style={styles.cancelButton}
          onPress={cancelSubscription}
        >
          <ViewTypographyText
            selectable={false}
            style={styles.cancelButtonText}
          >
            Cancel Subscription
          </ViewTypographyText>
        </ViewButtonPressable>
      </ViewContainerStatic>
    </ViewContainerStatic>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 20,
    margin: 10,
    width: 500,
  },
  selectedCard: {
    width: 500,
    borderColor: "blue",
  },
  cardText: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  cancelContainer: {
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  subscribeButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
  },
  cancelButtonText: {
    color: "white",
    fontSize: 16,
  },
});
